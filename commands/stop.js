"use strict";

class Stop {
    async handle(bot, message, args) {
        if (message.guild && bot.voiceHandlers[message.guild.id]) {
            bot.voiceHandlers[message.guild.id].end();
        }
    }

    info() {
        return [
            ["!stop"]
        ];
    }
}

module.exports = new Stop();