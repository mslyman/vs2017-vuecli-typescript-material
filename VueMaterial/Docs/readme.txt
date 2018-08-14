2018-08-09
How to get this:

check node & npm versions
install vue-cli 3 globally (https://cli.vuejs.org/):

run vue cli gui (from command line) -> open gui page in browser:
>vue ui

Create project with typescript in ClientApp folder (vithin WebApi project)

modify vue.config.js:

module.exports = {
    lintOnSave: false,
    outputDir: '../wwwroot',
    configureWebpack: {
        devtool: 'source-map',
        output: {
            devtoolModuleFilenameTemplate: '[absolute-resource-path]',
            devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
        }
    }
}

(main is outputDir)


npm run serve
npm run build


How to adapt Web Api project to webpack dev server:

ConfigureServices:
			services.AddCors();
Configure:
            if (env.IsDevelopment())
            {
                app.UseCors(builder =>
                builder
                    .WithOrigins("http://localhost:8080", "http://localhost:8081")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                );
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();

