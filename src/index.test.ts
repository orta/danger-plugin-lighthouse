import lighthouse from "./index";

declare const global: any;

describe("lighthouse()", () => {
  beforeEach(() => {
    global.warn = jest.fn();
    global.message = jest.fn();
    global.fail = jest.fn();
    global.markdown = jest.fn();
  });

  afterEach(() => {
    global.warn = undefined;
    global.message = undefined;
    global.fail = undefined;
    global.markdown = undefined;
  });

  it("Checks for a that message has been called", () => {
    global.danger = {
      github: { pr: { title: "My Test Title" } }
    };

    lighthouse({ path: "fixtures" });

    const firstMD = global.markdown.mock.calls[0][0];
    expect(firstMD).toMatchInlineSnapshot(`
"## Lighthouse Scores

##### [\`/\`](https://typescript-v2-116.ortam.now.sh/)

| Performance | Accessibility | Best Practices | SEO | Progressive Web App |
|:--: | :---: | :---: | :---: | :--:|
| 0.99 | 0.85 | 0.93 | 0.82 | 0.52 |


##### [\`/tsconfig\`](https://typescript-v2-116.ortam.now.sh/tsconfig)

| Performance | Accessibility | Best Practices | SEO | Progressive Web App |
|:--: | :---: | :---: | :---: | :--:|
| 0.94 | 0.88 | 0.93 | 0.79 | 0.52 |


##### [\`/docs/handbook/integrating-with-build-tools.html\`](https://typescript-v2-116.ortam.now.sh/docs/handbook/integrating-with-build-tools.html)

| Performance | Accessibility | Best Practices | SEO | Progressive Web App |
|:--: | :---: | :---: | :---: | :--:|
| 0.96 | 0.87 | 0.93 | 0.73 | 0.52 |

      "
    `);
  });
});
