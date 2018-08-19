"use strict";

var bot = require('./helpers/bot.js')

bot.client.on('ready', () => {
    console.log('I am ready!');
    bot.client.user.setActivity(bot.config.activity);
});

bot.client.on('message', async message => {
    //ignore the bots messages
    if (message.author.bot) return;

    //ignore any message that doesnt start with the prefix
    if (message.content.indexOf(bot.config.prefix) !== 0) return;

    const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    console.log((bot.config.prefix + command + ' ' + args.join(' ')).trim() + ' [' + message.author.tag + ']');
    bot.runCommand(command, bot, message, args);
});

bot.client.login(bot.config.token);