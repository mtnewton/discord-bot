"use strict";

var fs = require('fs');

class Loader 
{
    constructor() 
    {
        this.commands = [];
        var files = fs.readdirSync('commands');
        files.forEach((file, index) => {
            var filePath = '../../commands/' + file;
            var name = file.split('.').slice(0, -1).join('.');
            this.commands[name] = filePath;
        });
    }

    get(command) 
    {
        if (command in this.commands) {
            return require(this.commands[command]);
        }
    }
}

module.exports = new Loader();