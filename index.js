"use strict";

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./Helpers/Config/loader.js')

const commandLoader = require('./Helpers/Commands/loader.js');

var globals = {
    client: client,
    config: config,
    commandLoader: commandLoader,
    voiceConnections: {}
}

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity(config.activity);
});

client.on('message', async message => {
    //ignore the bots messages
    if (message.author.bot) return;

    //ignore any message that doesnt start with the prefix
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    console.log((config.prefix + command + ' ' + args.join(' ')).trim() + ' [' + message.author.tag + ']');
    commandLoader.get(command).handle(globals, message, args);
});

client.login(config.token);