"use strict";

const ytdl = require('ytdl-core');

class Play {
    async handle(bot, message, args) {
        if (!args.length || !message.guild || !bot.voiceConnections[message.guild.id]) {
            return;
        }
        if (bot.voiceHandlers[message.guild.id]) {
            bot.voiceHandlers[message.guild.id].end();
        }
        var audioStream = ytdl(args[0]);
        bot.voiceHandlers[message.guild.id] = bot.voiceConnections[message.guild.id].playStream(audioStream);
    }

    info() {
        return [
            ["!play** *youtubeLink* ** "]
        ];
    }
}

module.exports = new Play();