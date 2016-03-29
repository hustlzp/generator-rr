'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

    constructor: function () {
        yeoman.Base.apply(this, arguments);
        this.argument('name', {type: String, required: true});
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath(`container.js`),
            this.destinationPath(`containers/${this.name}.js`), {
                name: this.name
            }
        );
    }
});
