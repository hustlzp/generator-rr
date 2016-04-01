# generator-rr

React+Redux scaffolding generator based on [Yeoman](http://yeoman.io).

###Installation

```sh
$ npm install -g yo
$ git clone https://github.com/hustlzp/generator-rr.git
$ npm install
$ npm link
```

###Usage

```sh
$ yo rr
$ yo rr:reducer <name>
$ yo rr:container <name>
$ yo rr:component <name>
```

If you are using WebStorm, you can [import](https://www.jetbrains.com/help/phpstorm/2016.1/sharing-live-templates.html) `webstorm-live-templates.xml` to `Preferences -> Editor -> Live Templates`.

Then you can use these templates:

```sh
redux:action
redux:asyncAction
redux:reducerCase
redux:reducerAsyncCases
```
