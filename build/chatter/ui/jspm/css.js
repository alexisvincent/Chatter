/**
 * Created by alexisvincent on 2016/05/26.
 */
import Plugins from 'jspm-loader-css/src/plugins.js'
import Loader from 'jspm-loader-css/src/loader.js'
import cssnext from 'postcss-cssnext'
import atImport from 'postcss-import'

const plugins = [
    Plugins.values,
    Plugins.localByDefault,
    Plugins.extractImports,
    Plugins.scope,
    cssnext(),
    atImport()
];

const { fetch, bundle } = new Loader(plugins);
export { fetch, bundle };
