Steps to reproduce:

```
npm i
npx webpack
```

See the following error:

```
path.js:39
    throw new ERR_INVALID_ARG_TYPE('path', 'string', path);
    ^

TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
    at assertPath (path.js:39:11)
    at extname (path.js:1375:5)
    at maps.map.map (/Users/bengourley/Development/bugsnag-webpack-emit-assets-repro/node_modules/webpack-bugsnag-plugins/source-map-uploader-plugin.js:67:52)
    at Array.map (<anonymous>)
    at chunkToSourceMapDescriptors (/Users/bengourley/Development/bugsnag-webpack-emit-assets-repro/node_modules/webpack-bugsnag-plugins/source-map-uploader-plugin.js:45:21)
    at Array.map (<anonymous>)
    at plugin (/Users/bengourley/Development/bugsnag-webpack-emit-assets-repro/node_modules/webpack-bugsnag-plugins/source-map-uploader-plugin.js:86:39)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/bengourley/Development/bugsnag-webpack-emit-assets-repro/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:7:1)
    at AsyncSeriesHook.lazyCompileHook (/Users/bengourley/Development/bugsnag-webpack-emit-assets-repro/node_modules/tapable/lib/Hook.js:154:20)
    at asyncLib.forEachLimit.err (/Users/bengourley/Development/bugsnag-webpack-emit-assets-repro/node_modules/webpack/lib/Compiler.js:432:27)
    at /Users/bengourley/Development/bugsnag-webpack-emit-assets-repro/node_modules/neo-async/async.js:2813:7
    at done (/Users/bengourley/Development/bugsnag-webpack-emit-assets-repro/node_modules/neo-async/async.js:3521:9)
    at outputFileSystem.writeFile.err (/Users/bengourley/Development/bugsnag-webpack-emit-assets-repro/node_modules/webpack/lib/Compiler.js:400:9)
    at /Users/bengourley/Development/bugsnag-webpack-emit-assets-repro/node_modules/graceful-fs/graceful-fs.js:45:10
    at FSReqWrap.oncomplete (fs.js:171:20)
```
