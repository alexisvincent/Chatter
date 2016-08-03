require('dotenv').config({silent: true});
require('babel-core/register')

var fs = require('fs-extra')
var utils = require('./server/utils')

fs.mkdirsSync('build')

fs.copy('jspm.config.js', 'build/config.js', {});
fs.copy('jspm.browser.js', 'build/config.js', {});
fs.copy('jspm_packages/system.js', 'build/jspm_packages/system.js', {});
fs.copy('jspm_packages/system.js.map', 'build/jspm_packages/system.js.map', {});
fs.copy('jspm_packages/system-polyfills.js', 'build/jspm_packages/system-polyfills.js', {});
fs.copy('jspm_packages/system-pollyfills.js.map', 'build/jspm_packages/system-polyfills.js.map', {});
fs.copy('resources', 'build/resources', {});

const index = utils.constructIndex();

const mobile = process.env.PLATFORM === 'mobile';

fs.writeFile('build/index.html', index);

// const css = utils.renderscss({
//         file: 'app/app.scss',
//         outputstyle: 'compressed',
//         sourcemap: true
//     }, {
//         from: 'app/app.scss',
//         to: 'build/app.css'
//     }
// ).then(function (result) {
//     fs.writefilesync('build/app.css', result.css);
//     if (result.map) fs.writefilesync('build/app.css.map', result.map);
//     console.log('finished scss')
// });

(new utils.jspm.Builder()).bundle('app/app.js', 'build/bundle.js', {
    minify: true,
    mangle: true,
    sourceMaps: true,
    lowResSourceMaps: true,
}).then(function () {
    console.log('Finished JS')

    if (mobile) {
        css.then(function () {
            fs.copy('build', 'mobile/www', {})
        })
    }
})