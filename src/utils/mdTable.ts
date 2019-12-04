interface Tableable {
  type: string
  headings: Array<{ text: string }>
  items: TableRowable[]
}

interface TableRowElement {
  statistic: string
  element: string | { type: string; value: string }
  value: string
}

interface TableRowGroup  {
  group: string
  groupLabel: string
  duration: number
}

interface TabelRowNode {
  node: { type: string; selector: string; path: string; snippet: string; nodeLabel: string }
}

type TableRowable = TableRowElement | TabelRowNode | TableRowGroup

export function mdTable(obj: Tableable) {
  if (!obj) {
    throw new Error("Can't pass in nils to mdTable")
  }

  if (obj.type !== "table") {
    throw new Error("Can't pass in non-tables to mdTable (see type)")
  }

  const table: string[] = []

  const header = obj.headings.map(h => h.text).join(" | ")
  const border = obj.headings.map(_ => "-").join("-: | :-")

  const content = obj.items.map(createTableRow).join("|\n| ")

  table.push("\n| " + header + " |")
  table.push("|:" + border + ":|")
  table.push("| " + content + " |\n\n")
  return table.join("\n")
}

export function createTableRow(obj: TableRowable) {
  if ("group" in obj) {
    return `${obj.groupLabel} | ${obj.duration}`
  }

  if ("node" in obj) {
    return `\`${obj.node!.nodeLabel}\`: \`${obj.node!.snippet}\``
  }

  if ("element" in obj) {
    if (typeof obj.element === "string") {
      return `${obj.statistic} - ${obj.element}: \`${obj.value}\` `
    } else {
      return `${obj.statistic} - ${obj.element.type}: \`${obj.element.value}\` `
    }
  }
}
