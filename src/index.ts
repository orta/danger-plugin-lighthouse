// Provides dev-time type structures for  `danger` - doesn't affect runtime.
import { DangerDSLType } from "../node_modules/danger/distribution/dsl/DangerDSL"
declare var danger: DangerDSLType
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void
export declare function markdown(message: string): void

import { existsSync, readdirSync, readFileSync } from "fs"
import { join } from "path"
import * as url from "url"
import { LighthouseJSON } from "./types"
import { mdTable } from "./utils/mdTable"

interface LightHouseOptions {
  path: string
}

const defaultOptions = {
  path: "results"
}

/**
 * Takes lighthouse JSON data and makes it a pretty table
 */
export default function(options: LightHouseOptions = defaultOptions) {
  if (!existsSync(options.path)) {
    // tslint:disable-next-line: no-console
    return console.error(`[danger-lighthouse] A folder did not exist at ${options.path}.`)
  }

  const contentsAtPath = readdirSync(options.path, { encoding: "utf8" })
  const jsons = contentsAtPath.filter(f => f.endsWith(".json"))

  const markdowns: string[] = []
  const header = "## Lighthouse Scores\n"
  markdowns.push(header)

  const fails = new Set<string>()

  jsons.forEach(lighthousePath => {
    const fullPath = join(options.path, lighthousePath)
    const jsonString = readFileSync(fullPath, "utf8")

    const json: LighthouseJSON = JSON.parse(jsonString)

    const pageURL = url.parse(json.requestedUrl)

    const auditsIActuallyCareAbout: Array<keyof LighthouseJSON["audits"]> = [
      "color-contrast",
      "bypass",
      "document-title"
      // "redirects-http",
      // "errors-in-console",
      // "interactive",
      // "doctype",
    ]

    const auditsIKindaWannaKnowIfTheyFail: Array<keyof LighthouseJSON["audits"]> = [
      "without-javascript",
      "viewport",
      "max-potential-fid"
    ]

    const jsonMDs: string[] = []

    const categories = Object.keys(json.categories)
    const reportHeader = categories.map(c => json.categories[c].title).join(" | ")
    const border = categories.map(c => "-").join("-: | :-")
    const content = categories.map(c => json.categories[c].score).join(" | ")

    jsonMDs.push("## [`" + pageURL.path + "`](" + pageURL.href + ")")

    // This is the headline summary
    jsonMDs.push("\n| " + reportHeader + " |")
    jsonMDs.push("|:" + border + ":|")
    jsonMDs.push("| " + content + " |\n\n")

    // List the important audits first
    auditsIActuallyCareAbout.forEach(key => {
      const audit = json.audits[key]
      const failed = audit.scoreDisplayMode === "binary" && audit.score === 0
      if (failed) {
        fails.add(audit.id)
        jsonMDs.push(`### ${audit.id}`)

        jsonMDs.push(`${audit.title} ${audit.description}`)

        if (audit.details) {
          jsonMDs.push(mdTable(audit.details as any))
        }
      }
    })

    markdowns.push(jsonMDs.join("\n"))
  })

  markdown(markdowns.join("\n"))
  if (fails) {
    fail(`Failed the following audits: \`${Array.from(fails).sort().join("`, `")}\``)
  }
}
