"use strict";

class Leave {
    async handle(globals, message, args) {
        if (message.guild && globals.voiceConnections[message.guild.id]) {
            globals.voiceConnections[message.guild.id].disconnect();
        }
    }

    info() {
        return [
            ["!leave"]
        ];
    }
}

module.exports = new Leave();