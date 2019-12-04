import { readFileSync } from "fs"
import { LighthouseJSON } from "../types"
import { mdTable } from "./mdTable"

type Fixtures =
  | "typescript-v2-116.ortam.now.sh_2019-11-08_14-35-32"
  | "typescript-v2-116.ortam.now.sh_2019-11-08_14-35-37"
  | "typescript-v2-116.ortam.now.sh_2019-11-08_14-35-43"

const getFixture = (input: Fixtures): LighthouseJSON => JSON.parse(readFileSync(`./fixtures/${input}.json`, "utf8"))

it("gives the expected result", () => {
  const fixture = getFixture("typescript-v2-116.ortam.now.sh_2019-11-08_14-35-32")
  const table = mdTable(fixture.audits["color-contrast"].details as any)
  expect(table).toMatchInlineSnapshot(`
    "
    | Failing Elements |
    |:-:|
    | \`Docs\`: \`<a href=\\"https://developer.microsoft.com/en-us/fabric\\" class=\\"ms-Link root-5\\">Docs</a>\`|
    | \`Stack Overflow\`: \`<a href=\\"https://stackoverflow.com/questions/tagged/office-ui-fabric\\" class=\\"ms-Link root-5\\">Stack Overflow</a>\`|
    | \`Github\`: \`<a href=\\"https://github.com/officeDev/office-ui-fabric-react/\\" class=\\"ms-Link root-5\\">Github</a>\`|
    | \`Twitter\`: \`<a href=\\"https://twitter.com/officeuifabric\\" class=\\"ms-Link root-5\\">Twitter</a>\`|
    | \`Icons\`: \`<a href=\\"https://developer.microsoft.com/en-us/fabric#/styles/icons\\" class=\\"ms-Link root-5\\">Icons</a>\`|
    | \`Typography\`: \`<a href=\\"https://developer.microsoft.com/en-us/fabric#/styles/typography\\" class=\\"ms-Link root-5\\">Typography</a>\`|
    | \`Theme\`: \`<a href=\\"https://developer.microsoft.com/en-us/fabric#/styles/themegenerator\\" class=\\"ms-Link root-5\\">Theme</a>\` |

    "
  `)
})
