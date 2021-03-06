# generator-rr

React+Redux scaffolding generator based on [Yeoman](http://yeoman.io).

Batteries included:

* react-router
* ES6 via Babel-Loader
* No switch/case in reducer
* [Radium](https://github.com/FormidableLabs/radium) to handle CSS
* Redux-DevTools included
* Webpack with [HMR](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html) enable
* [Fabric](https://www.fabfile.org/) for deployment
* [Qiniu](http://www.qiniu.com) supported

###Installation

```sh
npm install -g yo
git clone https://github.com/hustlzp/generator-rr.git
npm install
npm link
```

###Setup Project

```sh
mkdir my-new-project && cd my-new-project
yo rr
```

###Generate Reducer/Container/Component

```sh
yo rr:reducer <name>
yo rr:container <name>
yo rr:component <name>
```

###WebStorm Live Templates

If you are using WebStorm, you can [import](https://www.jetbrains.com/help/phpstorm/2016.1/sharing-live-templates.html) `webstorm-live-templates.xml` to `Preferences -> Editor -> Live Templates`.

Then you can use these templates:

```sh
redux:action
redux:asyncActions
redux:actionHandler
redux:asyncActionHandlers
```

###Start Development Server

```sh
npm start
```

###Deployment

* Update `output.publicPath` in `webpack.config.prod.js` to your Qiniu url (such as `http://7xsiur.com2.z0.glb.qiniucdn.com/`)
* Update `env.host_string` and project path in `fabfile.py` to the user and IP of your server
* Update config in `qrsync.conf` to your Qiniu config
* Update domain and project path in `nginx.conf`, copy it to server, and then restart Nginx
* Run `npm run deploy`

###License

MIT
