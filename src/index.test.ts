import lighthouse from "./index"

declare const global: any

describe("lighthouse()", () => {
  beforeEach(() => {
    global.warn = jest.fn()
    global.message = jest.fn()
    global.fail = jest.fn()
    global.markdown = jest.fn()
  })

  afterEach(() => {
    global.warn = undefined
    global.message = undefined
    global.fail = undefined
    global.markdown = undefined
  })

  it("Checks for a that message has been called", () => {
    global.danger = {
      github: { pr: { title: "My Test Title" } }
    }

    lighthouse({ path: "fixtures" })

    const firstFail = global.fail.mock.calls[0][0]

    expect(firstFail).toMatchInlineSnapshot(
      `"Failed the following audits: \`bypass\`, \`color-contrast\`, \`document-title\`"`
    )

    const firstMD = global.markdown.mock.calls[0][0]
    expect(firstMD).toMatchInlineSnapshot(`
      "## Lighthouse Scores

      ## [\`/\`](https://typescript-v2-116.ortam.now.sh/)

      | Performance | Accessibility | Best Practices | SEO | Progressive Web App |
      |:--: | :---: | :---: | :---: | :--:|
      | 0.99 | 0.85 | 0.93 | 0.82 | 0.52 |


      ### color-contrast
      Background and foreground colors do not have a sufficient contrast ratio. Low-contrast text is difficult or impossible for many users to read. [Learn more](https://web.dev/color-contrast/).

      | Failing Elements |
      |:-:|
      | \`Docs\`: \`<a href=\\"https://developer.microsoft.com/en-us/fabric\\" class=\\"ms-Link root-5\\">Docs</a>\`|
      | \`Stack Overflow\`: \`<a href=\\"https://stackoverflow.com/questions/tagged/office-ui-fabric\\" class=\\"ms-Link root-5\\">Stack Overflow</a>\`|
      | \`Github\`: \`<a href=\\"https://github.com/officeDev/office-ui-fabric-react/\\" class=\\"ms-Link root-5\\">Github</a>\`|
      | \`Twitter\`: \`<a href=\\"https://twitter.com/officeuifabric\\" class=\\"ms-Link root-5\\">Twitter</a>\`|
      | \`Icons\`: \`<a href=\\"https://developer.microsoft.com/en-us/fabric#/styles/icons\\" class=\\"ms-Link root-5\\">Icons</a>\`|
      | \`Typography\`: \`<a href=\\"https://developer.microsoft.com/en-us/fabric#/styles/typography\\" class=\\"ms-Link root-5\\">Typography</a>\`|
      | \`Theme\`: \`<a href=\\"https://developer.microsoft.com/en-us/fabric#/styles/themegenerator\\" class=\\"ms-Link root-5\\">Theme</a>\` |


      ### bypass
      The page does not contain a heading, skip link, or landmark region Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more](https://web.dev/bypass/).

      | Failing Elements |
      |:-:|
      | \`html\`: \`<html dir=\\"ltr\\">\` |


      ### document-title
      Document doesn't have a \`<title>\` element The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://web.dev/document-title/).

      | Failing Elements |
      |:-:|
      | \`html\`: \`<html dir=\\"ltr\\">\` |


      ## [\`/tsconfig\`](https://typescript-v2-116.ortam.now.sh/tsconfig)

      | Performance | Accessibility | Best Practices | SEO | Progressive Web App |
      |:--: | :---: | :---: | :---: | :--:|
      | 0.94 | 0.88 | 0.93 | 0.79 | 0.52 |


      ### color-contrast
      Background and foreground colors do not have a sufficient contrast ratio. Low-contrast text is difficult or impossible for many users to read. [Learn more](https://web.dev/color-contrast/).

      | Failing Elements |
      |:-:|
      | \`Download\`: \`<a href=\\"/index.html#download-links\\">Download</a>\`|
      | \`Connect\`: \`<a href=\\"/community\\">Connect</a>\`|
      | \`search input\`: \`<input type=\\"search\\" placeholder=\\"Search Docs\\" class=\\"ds-input\\" autocomplete=\\"off\\" spellcheck=\\"false\\" role=\\"combobox\\" aria-autocomplete=\\"list\\" aria-expanded=\\"false\\" aria-label=\\"search input\\" aria-owns=\\"algolia-autocomplete-listbox-0\\" dir=\\"auto\\" style=\\"position: relative; vertical-align: top;\\">\` |


      ### document-title
      Document doesn't have a \`<title>\` element The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://web.dev/document-title/).

      | Failing Elements |
      |:-:|
      | \`html\`: \`<html>\` |


      ## [\`/docs/handbook/integrating-with-build-tools.html\`](https://typescript-v2-116.ortam.now.sh/docs/handbook/integrating-with-build-tools.html)

      | Performance | Accessibility | Best Practices | SEO | Progressive Web App |
      |:--: | :---: | :---: | :---: | :--:|
      | 0.96 | 0.87 | 0.93 | 0.73 | 0.52 |


      ### color-contrast
      Background and foreground colors do not have a sufficient contrast ratio. Low-contrast text is difficult or impossible for many users to read. [Learn more](https://web.dev/color-contrast/).

      | Failing Elements |
      |:-:|
      | \`Download\`: \`<a href=\\"/index.html#download-links\\">Download</a>\`|
      | \`Connect\`: \`<a href=\\"/community\\">Connect</a>\`|
      | \`search input\`: \`<input type=\\"search\\" placeholder=\\"Search Docs\\" class=\\"ds-input\\" autocomplete=\\"off\\" spellcheck=\\"false\\" role=\\"combobox\\" aria-autocomplete=\\"list\\" aria-expanded=\\"false\\" aria-label=\\"search input\\" aria-owns=\\"algolia-autocomplete-listbox-0\\" dir=\\"auto\\" style=\\"position: relative; vertical-align: top;\\">\` |


      ### document-title
      Document doesn't have a \`<title>\` element The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://web.dev/document-title/).

      | Failing Elements |
      |:-:|
      | \`html\`: \`<html>\` |

      "
    `)
  })
})
