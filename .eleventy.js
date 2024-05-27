const markdownIt = require("markdown-it")
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/style.css")
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
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
      output: "dist"
    },
    passthroughFileCopy: true,
  }
}
