'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to ' + chalk.red('generator-rr') + '!'
        ));

        var prompts = [{
            type: 'input',
            name: 'appName',
            message: 'Your project name'
        }];

        this.prompt(prompts, function (props) {
            this.props = props;
            done();
        }.bind(this));
    },

    writing: function () {
        var excludeList = [
            'node_modules'
        ];

        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'), {
                appName: this.props.appName
            }
        );

        fs.readdir(this.sourceRoot(), (err, items) => {
            for (let item of items) {
                // Skip the item if it is in our exclude list
                if (excludeList.indexOf(item) !== -1) {
                    continue;
                }

                // Copy all items to our root
                let fullPath = this.templatePath(item);
                if (fs.lstatSync(fullPath).isDirectory()) {
                    this.bulkDirectory(item, item);
                } else {
                    this.fs.copyTpl(
                        this.templatePath(item),
                        this.destinationPath(item), {
                            appName: this.props.appName
                        }
                    );
                }
            }
        });
    },

    install: function () {
        this.npmInstall();
    }
});
