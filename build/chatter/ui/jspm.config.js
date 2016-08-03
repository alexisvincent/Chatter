SystemJS.config({
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@2.4.0"
    }
  },
  transpiler: "plugin-babel",
  meta: {
    "*.ncss": {
      "loader": "jspm/css.js"
    },
    "*.js": {
      "babelOptions": {
        "stage1": true,
        "plugins": [
          [
            "react-transform",
            {
              "transforms": [
                {
                  "transform": "react-transform-jspm-hmr"
                },
                {
                  "transform": "react-transform-catch-errors",
                  "imports": [
                    "react",
                    "redbox-react"
                  ]
                }
              ]
            }
          ]
        ]
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "redux-slider-monitor": "npm:redux-slider-monitor@1.0.6",
    "postcss": "npm:postcss@5.0.21",
    "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.1",
    "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.1",
    "postcss-modules-scope": "npm:postcss-modules-scope@1.0.1",
    "postcss-modules-values": "npm:postcss-modules-values@1.1.3",
    "caniuse-db": "npm:caniuse-db@1.0.30000472",
    "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0",
    "caniuse-api": "npm:caniuse-api@1.5.0",
    "jspm-loader-css": "github:MeoMix/jspm-loader-css@master",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "capaj/systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.6",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "deep-equal": "npm:deep-equal@1.0.1",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fbjs": "npm:fbjs@0.2.1",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "history": "npm:history@1.17.0",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "invariant": "npm:invariant@2.2.1",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
    "js-cookie": "npm:js-cookie@2.1.0",
    "jsen": "npm:jsen@0.6.0",
    "json": "github:systemjs/plugin-json@0.1.0",
    "jss": "npm:jss@3.3.0",
    "lodash": "npm:lodash@4.13.1",
    "modelizr": "npm:modelizr@0.7.4",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "moment": "npm:moment@2.12.0",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.9",
    "postcss-cssnext": "npm:postcss-cssnext@2.6.0",
    "postcss-import": "npm:postcss-import@8.0.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "react": "npm:react@15.1.0",
    "react-basic-forms": "npm:react-basic-forms@0.1.6",
    "react-datepicker": "npm:react-datepicker@0.18.0",
    "react-dom": "npm:react-dom@15.0.0",
    "react-google-maps": "npm:react-google-maps@4.9.1",
    "react-hammerjs": "npm:react-hammerjs@0.4.5",
    "react-hot-loader": "npm:react-hot-loader@3.0.0-beta.0",
    "react-iscroll": "npm:react-iscroll@1.0.0",
    "react-motion": "npm:react-motion@0.4.2",
    "react-proxy": "npm:react-proxy@2.0.8",
    "react-redux": "npm:react-redux@4.4.5",
    "react-router": "npm:react-router@2.0.1",
    "react-router-redux": "npm:react-router-redux@4.0.0",
    "react-tap-event-plugin": "github:zilverline/react-tap-event-plugin@master",
    "react-tools": "npm:react-tools@0.10.0",
    "react-transform": "npm:babel-plugin-react-transform@2.0.2",
    "react-transform-catch-errors": "npm:react-transform-catch-errors@1.0.2",
    "react-transform-jspm-hmr": "npm:react-transform-jspm-hmr@1.0.1",
    "react-virtualized": "npm:react-virtualized@6.0.8",
    "recompose": "npm:recompose@0.19.0",
    "redbox-react": "npm:redbox-react@1.2.3",
    "redux": "npm:redux@3.5.2",
    "redux-devtools": "npm:redux-devtools@3.3.1",
    "redux-devtools-dispatch": "npm:redux-devtools-dispatch@2.0.1",
    "redux-devtools-dock-monitor": "npm:redux-devtools-dock-monitor@1.1.1",
    "redux-devtools-inspector": "npm:redux-devtools-inspector@0.3.1",
    "redux-devtools-log-monitor": "npm:redux-devtools-log-monitor@1.0.11",
    "redux-devtools-multiple-monitors": "npm:redux-devtools-multiple-monitors@1.0.0",
    "redux-thunk": "npm:redux-thunk@1.0.3",
    "reselect": "npm:reselect@2.5.1",
    "seamless-immutable": "npm:seamless-immutable@4.1.1",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "systemjs-hot-reloader-store": "github:peteruithoven/systemjs-hot-reloader-store@1.0.0",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "npm:postcss-modules-values@1.1.3": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-modules-local-by-default@1.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4"
      }
    },
    "npm:postcss-modules-scope@1.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4"
      }
    },
    "github:capaj/systemjs-hot-reloader@0.5.6": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "socket.io-client": "github:socketio/socket.io-client@1.4.5",
        "weakee": "npm:weakee@1.0.0"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:@alexkuz/react-json-tree@0.6.0-alpha1": {
      "map": {
        "babel-plugin-transform-runtime": "npm:babel-plugin-transform-runtime@6.6.0",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "react": "npm:react@15.1.0",
        "react-mixin": "npm:react-mixin@1.7.0",
        "react-pure-render": "npm:react-pure-render@1.0.2"
      }
    },
    "npm:babel-code-frame@6.7.7": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:babel-messages@6.7.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-runtime@6.6.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-runtime@5.8.38": {
      "map": {}
    },
    "npm:babel-runtime@6.6.1": {
      "map": {
        "core-js": "npm:core-js@2.2.2"
      }
    },
    "npm:babel-template@6.7.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-traverse": "npm:babel-traverse@6.7.6",
        "babel-types": "npm:babel-types@6.7.7",
        "babylon": "npm:babylon@6.7.0",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-traverse@6.7.6": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.7.7",
        "babel-messages": "npm:babel-messages@6.7.2",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-types": "npm:babel-types@6.7.7",
        "babylon": "npm:babylon@6.7.0",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-types@6.7.7": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-traverse": "npm:babel-traverse@6.7.6",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babylon@6.7.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:builtin-modules@1.1.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:camelcase-keys@2.1.0": {
      "map": {
        "camelcase": "npm:camelcase@2.1.1",
        "map-obj": "npm:map-obj@1.0.1"
      }
    },
    "npm:chalk@0.5.1": {
      "map": {
        "ansi-styles": "npm:ansi-styles@1.1.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@0.1.0",
        "strip-ansi": "npm:strip-ansi@0.3.0",
        "supports-color": "npm:supports-color@0.2.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:core-js@1.2.6": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:core-js@2.2.2": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:css-vendor@0.3.2": {
      "map": {}
    },
    "npm:dateformat@1.0.12": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "meow": "npm:meow@3.7.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:deep-extend@0.4.1": {
      "map": {}
    },
    "npm:domain-browser@1.1.7": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:error-ex@1.3.0": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:error-stack-parser@1.3.5": {
      "map": {
        "stackframe": "npm:stackframe@0.3.1"
      }
    },
    "npm:faker@3.1.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:fbjs@0.2.1": {
      "map": {
        "core-js": "npm:core-js@1.2.6",
        "promise": "npm:promise@7.1.1",
        "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
      }
    },
    "npm:fbjs@0.8.3": {
      "map": {
        "core-js": "npm:core-js@1.2.6",
        "immutable": "npm:immutable@3.8.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10"
      }
    },
    "npm:find-up@1.1.2": {
      "map": {
        "path-exists": "npm:path-exists@2.1.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.0"
      }
    },
    "npm:get-stdin@4.0.1": {
      "map": {}
    },
    "npm:global@4.3.0": {
      "map": {
        "min-document": "npm:min-document@2.18.0",
        "node-min-document": "npm:min-document@2.18.0",
        "process": "npm:process@0.5.2"
      }
    },
    "npm:graceful-fs@4.1.3": {
      "map": {}
    },
    "npm:hammerjs@2.0.6": {
      "map": {}
    },
    "npm:has-ansi@0.1.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@0.2.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:history@1.17.0": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "invariant": "npm:invariant@2.2.1",
        "query-string": "npm:query-string@3.0.3",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:history@2.0.1": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "invariant": "npm:invariant@2.2.1",
        "query-string": "npm:query-string@3.0.3",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:hosted-git-info@2.1.4": {
      "map": {}
    },
    "npm:iconv-lite@0.4.13": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:indent-string@2.1.0": {
      "map": {
        "repeating": "npm:repeating@2.0.0"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:isarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.5.3",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:javascript-stringify@1.1.0": {
      "map": {}
    },
    "npm:js-cookie@2.1.0": {
      "map": {}
    },
    "npm:jsen@0.6.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:jsondiffpatch@0.1.41": {
      "map": {
        "chalk": "npm:chalk@0.5.1"
      }
    },
    "npm:jss-nested@1.0.3": {
      "map": {
        "jss": "npm:jss@3.3.0"
      }
    },
    "npm:jss-vendor-prefixer@1.0.1": {
      "map": {
        "css-vendor": "npm:css-vendor@0.3.2",
        "jss": "npm:jss@3.3.0"
      }
    },
    "npm:jss@3.3.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:load-json-file@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "parse-json": "npm:parse-json@2.2.0",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.0",
        "strip-bom": "npm:strip-bom@2.0.0"
      }
    },
    "npm:lodash._baseisequal@3.0.7": {
      "map": {
        "lodash.isarray": "npm:lodash.isarray@3.0.4",
        "lodash.istypedarray": "npm:lodash.istypedarray@3.0.5",
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:lodash.debounce@3.1.1": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1"
      }
    },
    "npm:lodash.debounce@4.0.3": {
      "map": {}
    },
    "npm:lodash.isequal@3.0.4": {
      "map": {
        "lodash._baseisequal": "npm:lodash._baseisequal@3.0.7",
        "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.0.8",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    },
    "npm:lodash@3.10.1": {
      "map": {}
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:loud-rejection@1.3.0": {
      "map": {
        "array-find-index": "npm:array-find-index@1.0.1",
        "signal-exit": "npm:signal-exit@2.1.2",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:marker-clusterer-plus@2.1.2": {
      "map": {}
    },
    "npm:meow@3.7.0": {
      "map": {
        "camelcase-keys": "npm:camelcase-keys@2.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "loud-rejection": "npm:loud-rejection@1.3.0",
        "map-obj": "npm:map-obj@1.0.1",
        "minimist": "npm:minimist@1.2.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "object-assign": "npm:object-assign@4.1.0",
        "read-pkg-up": "npm:read-pkg-up@1.0.1",
        "redent": "npm:redent@1.0.0",
        "trim-newlines": "npm:trim-newlines@1.0.0"
      }
    },
    "npm:min-document@2.18.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:moment@2.12.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:node-fetch@1.5.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:normalize-package-data@2.3.5": {
      "map": {
        "hosted-git-info": "npm:hosted-git-info@2.1.4",
        "is-builtin-module": "npm:is-builtin-module@1.0.0",
        "semver": "npm:semver@5.1.0",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1"
      }
    },
    "npm:pako@0.2.8": {
      "map": {}
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.0"
      }
    },
    "npm:path-exists@2.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.0"
      }
    },
    "npm:path-type@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.0"
      }
    },
    "npm:performance-now@0.2.0": {
      "map": {}
    },
    "npm:pify@2.3.0": {
      "map": {}
    },
    "npm:pinkie-promise@2.0.0": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:query-string@3.0.3": {
      "map": {
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:raf@3.2.0": {
      "map": {
        "performance-now": "npm:performance-now@0.2.0"
      }
    },
    "npm:randexp@0.4.2": {
      "map": {
        "discontinuous-range": "npm:discontinuous-range@1.0.0",
        "ret": "npm:ret@0.1.11",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:react-addons-shallow-compare@15.0.0-rc.2": {
      "map": {
        "react": "npm:react@15.1.0"
      }
    },
    "npm:react-datepicker@0.18.0": {
      "map": {
        "lodash": "npm:lodash@3.10.1",
        "moment": "npm:moment@2.12.0",
        "react": "npm:react@15.1.0",
        "react-onclickoutside": "npm:react-onclickoutside@4.5.0",
        "tether": "npm:tether@1.2.0"
      }
    },
    "npm:react-dock@0.2.3": {
      "map": {
        "lodash.debounce": "npm:lodash.debounce@3.1.1",
        "object-assign": "npm:object-assign@4.1.0",
        "react": "npm:react@15.1.0"
      }
    },
    "npm:react-dom@15.0.0": {
      "map": {
        "react": "npm:react@15.1.0"
      }
    },
    "npm:react-google-maps@4.9.1": {
      "map": {
        "can-use-dom": "npm:can-use-dom@0.1.0",
        "google-maps-infobox": "npm:google-maps-infobox@1.1.13",
        "invariant": "npm:invariant@2.2.1",
        "lodash.isequal": "npm:lodash.isequal@3.0.4",
        "marker-clusterer-plus": "npm:marker-clusterer-plus@2.1.2",
        "react": "npm:react@15.1.0",
        "react-dom": "npm:react-dom@15.0.0",
        "react-prop-types-element-of-type": "npm:react-prop-types-element-of-type@1.0.2",
        "scriptjs": "npm:scriptjs@2.5.8",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:react-hammerjs@0.4.5": {
      "map": {
        "hammerjs": "npm:hammerjs@2.0.6",
        "react": "npm:react@15.1.0",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:react-hot-loader@3.0.0-beta.0": {
      "map": {
        "babel-template": "npm:babel-template@6.7.0",
        "react-deep-force-update": "npm:react-deep-force-update@2.0.1",
        "react-proxy": "npm:react-proxy@3.0.0-alpha.1",
        "redbox-react": "npm:redbox-react@1.2.3",
        "source-map": "npm:source-map@0.4.4"
      }
    },
    "npm:react-iscroll@1.0.0": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "react": "npm:react@15.1.0",
        "react-dom": "npm:react-dom@15.0.0"
      }
    },
    "npm:react-mixin@1.7.0": {
      "map": {
        "object-assign": "npm:object-assign@2.1.1",
        "smart-mixin": "npm:smart-mixin@1.2.1"
      }
    },
    "npm:react-motion@0.4.2": {
      "map": {
        "performance-now": "npm:performance-now@0.2.0",
        "raf": "npm:raf@3.2.0",
        "react": "npm:react@15.1.0"
      }
    },
    "npm:react-onclickoutside@4.5.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:react-prop-types-element-of-type@1.0.2": {
      "map": {
        "invariant": "npm:invariant@2.2.1",
        "react": "npm:react@15.1.0"
      }
    },
    "npm:react-proxy@1.1.8": {
      "map": {
        "lodash": "npm:lodash@4.13.1",
        "react-deep-force-update": "npm:react-deep-force-update@1.0.1"
      }
    },
    "npm:react-proxy@2.0.8": {
      "map": {
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "npm:react-proxy@3.0.0-alpha.1": {
      "map": {
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "npm:react-router@2.0.1": {
      "map": {
        "history": "npm:history@2.0.1",
        "invariant": "npm:invariant@2.2.1",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:react-themeable@1.0.1": {
      "map": {
        "object-assign": "npm:object-assign@3.0.0"
      }
    },
    "npm:react-transform-jspm-hmr@1.0.1": {
      "map": {
        "global": "npm:global@4.3.0",
        "react-proxy": "npm:react-proxy@1.1.8"
      }
    },
    "npm:react-virtualized@6.0.8": {
      "map": {
        "classnames": "npm:classnames@2.2.3",
        "dom-helpers": "npm:dom-helpers@2.4.0",
        "raf": "npm:raf@3.2.0",
        "react": "npm:react@15.1.0",
        "react-addons-shallow-compare": "npm:react-addons-shallow-compare@15.0.0-rc.2",
        "react-dom": "npm:react-dom@15.0.0"
      }
    },
    "npm:read-pkg-up@1.0.1": {
      "map": {
        "find-up": "npm:find-up@1.1.2",
        "read-pkg": "npm:read-pkg@1.1.0"
      }
    },
    "npm:read-pkg@1.1.0": {
      "map": {
        "load-json-file": "npm:load-json-file@1.1.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "path-type": "npm:path-type@1.1.0"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:recompose@0.19.0": {
      "map": {
        "fbjs": "npm:fbjs@0.8.3",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.6"
      }
    },
    "npm:redbox-react@1.2.3": {
      "map": {
        "error-stack-parser": "npm:error-stack-parser@1.3.5",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:redent@1.0.0": {
      "map": {
        "indent-string": "npm:indent-string@2.1.0",
        "strip-indent": "npm:strip-indent@1.0.1"
      }
    },
    "npm:redux-devtools-dispatch@2.0.1": {
      "map": {
        "get-params": "npm:get-params@0.1.2",
        "react": "npm:react@15.1.0",
        "redux-devtools": "npm:redux-devtools@3.2.0",
        "redux-devtools-themes": "npm:redux-devtools-themes@1.0.0"
      }
    },
    "npm:redux-devtools-dock-monitor@1.1.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "parse-key": "npm:parse-key@0.2.1",
        "react": "npm:react@15.1.0",
        "react-dock": "npm:react-dock@0.2.3",
        "react-pure-render": "npm:react-pure-render@1.0.2",
        "redux-devtools": "npm:redux-devtools@3.2.0"
      }
    },
    "npm:redux-devtools-inspector@0.3.1": {
      "map": {
        "@alexkuz/react-json-tree": "npm:@alexkuz/react-json-tree@0.6.0-alpha1",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "dateformat": "npm:dateformat@1.0.12",
        "immutable": "npm:immutable@3.8.1",
        "javascript-stringify": "npm:javascript-stringify@1.1.0",
        "jsondiffpatch": "npm:jsondiffpatch@0.1.41",
        "jss": "npm:jss@3.3.0",
        "jss-nested": "npm:jss-nested@1.0.3",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@1.0.1",
        "lodash.debounce": "npm:lodash.debounce@4.0.3",
        "react": "npm:react@15.1.0",
        "react-pure-render": "npm:react-pure-render@1.0.2",
        "react-themeable": "npm:react-themeable@1.0.1",
        "redux-devtools-themes": "npm:redux-devtools-themes@1.0.0"
      }
    },
    "npm:redux-devtools-multiple-monitors@1.0.0": {
      "map": {
        "react": "npm:react@15.1.0",
        "redux-devtools": "npm:redux-devtools@3.1.1"
      }
    },
    "npm:redux-devtools-themes@1.0.0": {
      "map": {
        "base16": "npm:base16@1.0.0"
      }
    },
    "npm:redux-devtools@3.1.1": {
      "map": {
        "lodash": "npm:lodash@4.13.1",
        "react": "npm:react@15.1.0",
        "react-redux": "npm:react-redux@4.4.5",
        "redux": "npm:redux@3.5.2"
      }
    },
    "npm:redux-devtools@3.2.0": {
      "map": {
        "lodash": "npm:lodash@4.13.1",
        "react": "npm:react@15.1.0",
        "react-redux": "npm:react-redux@4.4.5",
        "redux": "npm:redux@3.5.2"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:repeating@2.0.0": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:scriptjs@2.5.8": {
      "map": {}
    },
    "npm:seamless-immutable@4.1.1": {
      "map": {}
    },
    "npm:semver@5.1.0": {
      "map": {}
    },
    "npm:signal-exit@2.1.2": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:smart-mixin@1.2.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:source-map@0.4.4": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:spdx-correct@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
      }
    },
    "npm:spdx-expression-parse@1.0.2": {
      "map": {
        "spdx-exceptions": "npm:spdx-exceptions@1.0.4",
        "spdx-license-ids": "npm:spdx-license-ids@1.2.0"
      }
    },
    "npm:spdx-license-ids@1.2.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:strip-ansi@0.3.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@0.2.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-bom@2.0.0": {
      "map": {
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:strip-indent@1.0.1": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:supports-color@0.2.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:tether@1.2.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:ua-parser-js@0.7.10": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:util-deprecate@1.0.2": {
      "map": {}
    },
    "npm:validate-npm-package-license@3.0.1": {
      "map": {
        "spdx-correct": "npm:spdx-correct@1.0.2",
        "spdx-expression-parse": "npm:spdx-expression-parse@1.0.2"
      }
    },
    "npm:warning@2.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "sha.js": "npm:sha.js@2.4.5",
        "ripemd160": "npm:ripemd160@1.0.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "asn1.js": "npm:asn1.js@4.6.2"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:asn1.js@4.6.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:react-tools@0.10.0": {
      "map": {
        "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
        "commoner": "npm:commoner@0.9.8",
        "jstransform": "npm:jstransform@3.0.0"
      }
    },
    "npm:jstransform@3.0.0": {
      "map": {
        "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
        "source-map": "npm:source-map@0.1.31",
        "base62": "npm:base62@0.1.1"
      }
    },
    "npm:commoner@0.9.8": {
      "map": {
        "graceful-fs": "npm:graceful-fs@2.0.3",
        "commander": "npm:commander@2.2.0",
        "iconv-lite": "npm:iconv-lite@0.2.11",
        "mkdirp": "npm:mkdirp@0.3.5",
        "private": "npm:private@0.1.6",
        "q": "npm:q@1.0.1",
        "recast": "npm:recast@0.7.5",
        "glob": "npm:glob@3.2.11",
        "install": "npm:install@0.1.8"
      }
    },
    "npm:recast@0.7.5": {
      "map": {
        "esprima-fb": "npm:esprima-fb@6001.1001.0-dev-harmony-fb",
        "source-map": "npm:source-map@0.1.32",
        "private": "npm:private@0.1.6",
        "ast-types": "npm:ast-types@0.4.13",
        "cls": "npm:cls@0.1.5"
      }
    },
    "npm:source-map@0.1.31": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:source-map@0.1.32": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:glob@3.2.11": {
      "map": {
        "minimatch": "npm:minimatch@0.3.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:ast-types@0.4.13": {
      "map": {
        "depd": "npm:depd@1.0.1"
      }
    },
    "npm:minimatch@0.3.0": {
      "map": {
        "sigmund": "npm:sigmund@1.0.1",
        "lru-cache": "npm:lru-cache@2.7.3"
      }
    },
    "npm:babel-plugin-react-transform@2.0.2": {
      "map": {
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "github:MeoMix/jspm-loader-css@master": {
      "map": {
        "cssnano": "npm:cssnano@3.6.2",
        "node-cssnano": "npm:cssnano@3.6.2",
        "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0"
      }
    },
    "npm:cssnano@3.6.2": {
      "map": {
        "postcss-calc": "npm:postcss-calc@5.2.1",
        "postcss": "npm:postcss@5.0.21",
        "postcss-colormin": "npm:postcss-colormin@2.2.0",
        "indexes-of": "npm:indexes-of@1.0.1",
        "postcss-convert-values": "npm:postcss-convert-values@2.3.4",
        "autoprefixer": "npm:autoprefixer@6.3.6",
        "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
        "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.0.1",
        "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.0",
        "defined": "npm:defined@1.0.0",
        "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
        "postcss-discard-unused": "npm:postcss-discard-unused@2.2.1",
        "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
        "postcss-merge-idents": "npm:postcss-merge-idents@2.1.6",
        "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.1",
        "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
        "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.2",
        "postcss-minify-params": "npm:postcss-minify-params@1.0.4",
        "postcss-merge-rules": "npm:postcss-merge-rules@2.0.9",
        "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.0",
        "postcss-minify-selectors": "npm:postcss-minify-selectors@2.0.5",
        "postcss-normalize-url": "npm:postcss-normalize-url@3.0.7",
        "postcss-ordered-values": "npm:postcss-ordered-values@2.2.1",
        "postcss-reduce-idents": "npm:postcss-reduce-idents@2.3.0",
        "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.3",
        "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
        "postcss-svgo": "npm:postcss-svgo@2.1.3",
        "postcss-zindex": "npm:postcss-zindex@2.1.1",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "decamelize": "npm:decamelize@1.2.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:css-modules-loader-core@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.10",
        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss-modules-values": "npm:postcss-modules-values@1.1.0",
        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0",
        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0"
      }
    },
    "npm:postcss-colormin@2.2.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "colormin": "npm:colormin@1.1.0"
      }
    },
    "npm:autoprefixer@6.3.6": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "normalize-range": "npm:normalize-range@0.1.2",
        "num2fraction": "npm:num2fraction@1.2.2",
        "browserslist": "npm:browserslist@1.3.2",
        "caniuse-db": "npm:caniuse-db@1.0.30000472"
      }
    },
    "npm:postcss-convert-values@2.3.4": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-discard-comments@2.0.4": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-discard-duplicates@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-calc@5.2.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "reduce-css-calc": "npm:reduce-css-calc@1.2.3",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0"
      }
    },
    "npm:postcss-filter-plugins@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "uniqid": "npm:uniqid@1.0.0"
      }
    },
    "npm:postcss-discard-unused@2.2.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "flatten": "npm:flatten@1.0.2",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-discard-empty@2.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-discard-overridden@0.1.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-merge-idents@2.1.6": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "has-own": "npm:has-own@1.0.0"
      }
    },
    "npm:postcss-minify-gradients@1.0.2": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-minify-font-values@1.0.5": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:postcss-merge-longhand@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-minify-params@1.0.4": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-merge-rules@2.0.9": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-normalize-charset@1.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-minify-selectors@2.0.5": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-selector-parser": "npm:postcss-selector-parser@2.0.0",
        "alphanum-sort": "npm:alphanum-sort@1.0.2"
      }
    },
    "npm:postcss-normalize-url@3.0.7": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "is-absolute-url": "npm:is-absolute-url@2.0.0",
        "normalize-url": "npm:normalize-url@1.5.2"
      }
    },
    "npm:postcss-reduce-idents@2.3.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-ordered-values@2.2.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-reduce-transforms@1.0.3": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-unique-selectors@2.0.2": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-svgo@2.1.3": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "is-svg": "npm:is-svg@2.0.1",
        "svgo": "npm:svgo@0.6.6"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-zindex@2.1.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-modules-local-by-default@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4"
      }
    },
    "npm:postcss-modules-values@1.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2"
      }
    },
    "npm:postcss-modules-scope@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4"
      }
    },
    "npm:postcss@5.0.10": {
      "map": {
        "supports-color": "npm:supports-color@3.1.2",
        "source-map": "npm:source-map@0.5.6",
        "js-base64": "npm:js-base64@2.1.9"
      }
    },
    "npm:postcss@5.0.21": {
      "map": {
        "supports-color": "npm:supports-color@3.1.2",
        "source-map": "npm:source-map@0.5.6",
        "js-base64": "npm:js-base64@2.1.9"
      }
    },
    "npm:postcss-selector-parser@2.0.0": {
      "map": {
        "indexes-of": "npm:indexes-of@1.0.1",
        "flatten": "npm:flatten@1.0.2",
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:normalize-url@1.5.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "prepend-http": "npm:prepend-http@1.0.4",
        "query-string": "npm:query-string@4.2.0",
        "sort-keys": "npm:sort-keys@1.1.2"
      }
    },
    "npm:browserslist@1.3.2": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000472"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:colormin@1.1.0": {
      "map": {
        "css-color-names": "npm:css-color-names@0.0.3",
        "color": "npm:color@0.11.1"
      }
    },
    "npm:reduce-css-calc@1.2.3": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0",
        "reduce-function-call": "npm:reduce-function-call@1.0.1"
      }
    },
    "npm:reduce-function-call@1.0.1": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0"
      }
    },
    "npm:is-svg@2.0.1": {
      "map": {
        "html-comment-regex": "npm:html-comment-regex@1.1.0"
      }
    },
    "npm:svgo@0.6.6": {
      "map": {
        "coa": "npm:coa@1.0.1",
        "sax": "npm:sax@1.2.1",
        "js-yaml": "npm:js-yaml@3.6.1",
        "whet.extend": "npm:whet.extend@0.9.9",
        "mkdirp": "npm:mkdirp@0.5.1",
        "colors": "npm:colors@1.1.2",
        "csso": "npm:csso@2.0.0"
      }
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "map": {
        "fastparse": "npm:fastparse@1.1.1",
        "cssesc": "npm:cssesc@0.1.0"
      }
    },
    "npm:query-string@4.2.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:csso@2.0.0": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "clap": "npm:clap@1.1.1"
      }
    },
    "npm:color@0.11.1": {
      "map": {
        "color-convert": "npm:color-convert@0.5.3",
        "color-string": "npm:color-string@0.3.0"
      }
    },
    "npm:sort-keys@1.1.2": {
      "map": {
        "is-plain-obj": "npm:is-plain-obj@1.1.0"
      }
    },
    "npm:js-yaml@3.6.1": {
      "map": {
        "argparse": "npm:argparse@1.0.7",
        "esprima": "npm:esprima@2.7.2"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:coa@1.0.1": {
      "map": {
        "q": "npm:q@1.4.1"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "npm:argparse@1.0.7": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:clap@1.1.1": {
      "map": {
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.4.1"
      }
    },
    "npm:caniuse-api@1.5.0": {
      "map": {
        "lodash.uniq": "npm:lodash.uniq@4.3.0",
        "lodash.memoize": "npm:lodash.memoize@4.1.0",
        "shelljs": "npm:shelljs@0.7.0",
        "browserslist": "npm:browserslist@1.3.2",
        "caniuse-db": "npm:caniuse-db@1.0.30000472"
      }
    },
    "npm:lodash.memoize@4.1.0": {
      "map": {
        "lodash._root": "npm:lodash._root@3.0.1"
      }
    },
    "npm:lodash.uniq@4.3.0": {
      "map": {
        "lodash._baseuniq": "npm:lodash._baseuniq@4.6.0"
      }
    },
    "npm:lodash._baseuniq@4.6.0": {
      "map": {
        "lodash._root": "npm:lodash._root@3.0.1",
        "lodash._createset": "npm:lodash._createset@4.0.3"
      }
    },
    "npm:shelljs@0.7.0": {
      "map": {
        "interpret": "npm:interpret@1.0.1",
        "rechoir": "npm:rechoir@0.6.2",
        "glob": "npm:glob@7.0.3"
      }
    },
    "npm:glob@7.0.3": {
      "map": {
        "minimatch": "npm:minimatch@3.0.0",
        "inflight": "npm:inflight@1.0.5",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:inflight@1.0.5": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:minimatch@3.0.0": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.4"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:brace-expansion@1.1.4": {
      "map": {
        "balanced-match": "npm:balanced-match@0.4.1",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:postcss-cssnext@2.6.0": {
      "map": {
        "pleeease-filters": "npm:pleeease-filters@3.0.0",
        "postcss-color-function": "npm:postcss-color-function@2.0.1",
        "pixrem": "npm:pixrem@3.0.1",
        "postcss-color-gray": "npm:postcss-color-gray@3.0.0",
        "postcss-color-hwb": "npm:postcss-color-hwb@2.0.0",
        "postcss-color-hex-alpha": "npm:postcss-color-hex-alpha@2.0.0",
        "postcss-color-rebeccapurple": "npm:postcss-color-rebeccapurple@2.0.0",
        "postcss-color-rgba-fallback": "npm:postcss-color-rgba-fallback@2.2.0",
        "postcss-custom-media": "npm:postcss-custom-media@5.0.1",
        "postcss-font-variant": "npm:postcss-font-variant@2.0.0",
        "postcss-custom-selectors": "npm:postcss-custom-selectors@3.0.0",
        "postcss-custom-properties": "npm:postcss-custom-properties@5.0.1",
        "postcss-initial": "npm:postcss-initial@1.5.1",
        "postcss-media-minmax": "npm:postcss-media-minmax@2.1.2",
        "postcss-pseudo-class-any-link": "npm:postcss-pseudo-class-any-link@1.0.0",
        "postcss-nesting": "npm:postcss-nesting@2.3.1",
        "postcss-pseudoelements": "npm:postcss-pseudoelements@3.0.0",
        "postcss-replace-overflow-wrap": "npm:postcss-replace-overflow-wrap@1.0.0",
        "postcss-selector-matches": "npm:postcss-selector-matches@2.0.1",
        "postcss-selector-not": "npm:postcss-selector-not@2.0.0",
        "chalk": "npm:chalk@1.1.3",
        "postcss": "npm:postcss@5.0.21",
        "autoprefixer": "npm:autoprefixer@6.3.6",
        "caniuse-api": "npm:caniuse-api@1.5.0",
        "postcss-calc": "npm:postcss-calc@5.2.1"
      }
    },
    "npm:pleeease-filters@3.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "onecolor": "npm:onecolor@2.4.2"
      }
    },
    "npm:postcss-color-function@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "css-color-function": "npm:css-color-function@1.3.0",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-color-gray@3.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "color": "npm:color@0.7.3",
        "reduce-function-call": "npm:reduce-function-call@1.0.1"
      }
    },
    "npm:pixrem@3.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "browserslist": "npm:browserslist@1.3.2",
        "reduce-css-calc": "npm:reduce-css-calc@1.2.3"
      }
    },
    "npm:postcss-color-hwb@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "color": "npm:color@0.10.1",
        "reduce-function-call": "npm:reduce-function-call@1.0.1"
      }
    },
    "npm:postcss-color-hex-alpha@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "color": "npm:color@0.10.1"
      }
    },
    "npm:postcss-color-rebeccapurple@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "color": "npm:color@0.9.0"
      }
    },
    "npm:postcss-replace-overflow-wrap@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-color-rgba-fallback@2.2.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "rgb-hex": "npm:rgb-hex@1.0.0"
      }
    },
    "npm:postcss-custom-media@5.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-custom-selectors@3.0.0": {
      "map": {
        "postcss-selector-matches": "npm:postcss-selector-matches@2.0.1",
        "postcss": "npm:postcss@5.0.21",
        "balanced-match": "npm:balanced-match@0.2.1"
      }
    },
    "npm:postcss-font-variant@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-custom-properties@5.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "balanced-match": "npm:balanced-match@0.1.0"
      }
    },
    "npm:postcss-initial@1.5.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "lodash.template": "npm:lodash.template@4.2.5"
      }
    },
    "npm:postcss-nesting@2.3.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-media-minmax@2.1.2": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-pseudo-class-any-link@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-selector-parser": "npm:postcss-selector-parser@1.3.3"
      }
    },
    "npm:postcss-selector-matches@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "balanced-match": "npm:balanced-match@0.2.1"
      }
    },
    "npm:postcss-pseudoelements@3.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-selector-not@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "balanced-match": "npm:balanced-match@0.2.1"
      }
    },
    "npm:css-color-function@1.3.0": {
      "map": {
        "color": "npm:color@0.11.1",
        "balanced-match": "npm:balanced-match@0.1.0",
        "debug": "npm:debug@0.7.4",
        "rgb": "npm:rgb@0.1.0"
      }
    },
    "npm:color@0.7.3": {
      "map": {
        "color-string": "npm:color-string@0.2.4",
        "color-convert": "npm:color-convert@0.5.3"
      }
    },
    "npm:color@0.10.1": {
      "map": {
        "color-string": "npm:color-string@0.3.0",
        "color-convert": "npm:color-convert@0.5.3"
      }
    },
    "npm:color@0.9.0": {
      "map": {
        "color-string": "npm:color-string@0.3.0",
        "color-convert": "npm:color-convert@0.5.3"
      }
    },
    "npm:postcss-selector-parser@1.3.3": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "uniq": "npm:uniq@1.0.1",
        "indexes-of": "npm:indexes-of@1.0.1"
      }
    },
    "npm:lodash.template@4.2.5": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.assigninwith": "npm:lodash.assigninwith@4.0.7",
        "lodash.templatesettings": "npm:lodash.templatesettings@4.0.1",
        "lodash.tostring": "npm:lodash.tostring@4.1.3",
        "lodash.rest": "npm:lodash.rest@4.0.3",
        "lodash.keys": "npm:lodash.keys@4.0.7"
      }
    },
    "npm:lodash.templatesettings@4.0.1": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.escape": "npm:lodash.escape@4.0.0"
      }
    },
    "npm:color-string@0.2.4": {
      "map": {
        "color-name": "npm:color-name@1.0.1"
      }
    },
    "npm:lodash.assigninwith@4.0.7": {
      "map": {
        "lodash.keysin": "npm:lodash.keysin@4.1.4",
        "lodash.rest": "npm:lodash.rest@4.0.3"
      }
    },
    "npm:lodash.escape@4.0.0": {
      "map": {
        "lodash.tostring": "npm:lodash.tostring@4.1.3"
      }
    },
    "npm:postcss-import@8.0.2": {
      "map": {
        "read-cache": "npm:read-cache@1.0.0",
        "object-assign": "npm:object-assign@4.1.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss": "npm:postcss@5.0.21",
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:read-cache@1.0.0": {
      "map": {
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:normalizr@2.1.0": {
      "map": {
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "npm:json-schema-faker@0.3.3": {
      "map": {
        "chance": "npm:chance@1.0.3",
        "faker": "npm:faker@3.1.0",
        "deref": "npm:deref@0.6.4",
        "randexp": "npm:randexp@0.4.2"
      }
    },
    "npm:deref@0.6.4": {
      "map": {
        "deep-extend": "npm:deep-extend@0.4.1"
      }
    },
    "npm:redux-devtools-log-monitor@1.0.11": {
      "map": {
        "lodash.debounce": "npm:lodash.debounce@4.0.6",
        "react-pure-render": "npm:react-pure-render@1.0.2",
        "react-json-tree": "npm:react-json-tree@0.6.8",
        "redux-devtools-themes": "npm:redux-devtools-themes@1.0.0"
      }
    },
    "npm:redux-devtools@3.3.1": {
      "map": {
        "react-redux": "npm:react-redux@4.4.5",
        "lodash": "npm:lodash@4.13.1",
        "redux-devtools-instrument": "npm:redux-devtools-instrument@1.0.1"
      }
    },
    "npm:redux@3.5.2": {
      "map": {
        "lodash": "npm:lodash@4.13.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "lodash-es": "npm:lodash-es@4.13.1",
        "symbol-observable": "npm:symbol-observable@0.2.4"
      }
    },
    "npm:react-redux@4.4.5": {
      "map": {
        "lodash": "npm:lodash@4.13.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.1.0",
        "invariant": "npm:invariant@2.2.1"
      }
    },
    "npm:react-json-tree@0.6.8": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "react-pure-render": "npm:react-pure-render@1.0.2",
        "babel-plugin-transform-runtime": "npm:babel-plugin-transform-runtime@6.9.0",
        "react-mixin": "npm:react-mixin@1.7.0"
      }
    },
    "npm:redux-devtools-instrument@1.0.1": {
      "map": {
        "lodash": "npm:lodash@4.13.1",
        "symbol-observable": "npm:symbol-observable@0.2.4"
      }
    },
    "npm:babel-runtime@6.9.2": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5",
        "core-js": "npm:core-js@2.4.0"
      }
    },
    "npm:babel-plugin-transform-runtime@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:modelizr@0.7.4": {
      "map": {
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "json-schema-faker": "npm:json-schema-faker@0.3.3",
        "normalizr": "npm:normalizr@2.1.0",
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "npm:react-basic-forms@0.1.6": {
      "map": {
        "lodash": "npm:lodash@4.13.1",
        "react": "npm:react@15.1.0"
      }
    },
    "npm:react@15.1.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "loose-envify": "npm:loose-envify@1.2.0",
        "fbjs": "npm:fbjs@0.8.3"
      }
},
    "npm:redux-slider-monitor@1.0.6": {
      "map": {
        "redux-devtools-themes": "npm:redux-devtools-themes@1.0.0",
        "css-element-queries": "npm:css-element-queries@0.3.2"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "inherits": "npm:inherits@2.0.1",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3"
      }
    }
  }
});
