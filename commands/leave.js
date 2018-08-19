"use strict";

class Leave {
    async handle(bot, message, args) {
        if (message.guild && bot.voiceConnections[message.guild.id]) {
            bot.voiceConnections[message.guild.id].disconnect();
        }
    }

    info() {
        return [
            ["!leave"]
        ];
    }
}

module.exports = new Leave();