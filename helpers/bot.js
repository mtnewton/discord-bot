"use strict";

const Discord = require('discord.js');

class Bot {
    constructor() {
        this.client = new Discord.Client();

        this.config = require('./config/loader.js');
        this.commandLoader = require('./commands/loader.js');

        this.voiceConnections = {};
        this.voiceHandlers = {};
    }

    runCommand(command, bot, message, args) {
        var c = this.commandLoader.get(command);
        if (c) {
            c.handle(bot, message, args);
        }
    }
}

module.exports = new Bot();