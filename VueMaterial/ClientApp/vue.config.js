module.exports = {
    lintOnSave: false,
    baseUrl: '', // '/',
    outputDir: '../wwwroot',
    configureWebpack: {
        devtool: 'source-map',
        output: {
            devtoolModuleFilenameTemplate: '[absolute-resource-path]',
            devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
        }
    }
}