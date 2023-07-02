module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('JS');
    eleventyConfig.addPassthroughCopy('CSS');
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "_input",
            output: "_output",
        },
        passthroughFileCopy: true
    };
};