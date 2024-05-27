const markdownIt = require("markdown-it")
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/")
  eleventyConfig.addPlugin(eleventyNavigationPlugin)
  eleventyConfig.addPlugin(syntaxHighlight)

  let options = {
    html: true,
    breaks: true,
    linkify: true,
  }
  eleventyConfig.setLibrary("md", markdownIt(options))

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  }
}
