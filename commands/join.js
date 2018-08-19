"use strict";

class Join {
    async handle(globals, message, args) {
        if (message.guild) {
            var channels = message.guild.channels.filter(c => c.type === 'voice');
            var channel;
            if (args.length) {
                channel = channels.find(c => c.name.toLowerCase() === args[0].toLowerCase());
            } else {
                channel = channels.find(c => c.name.toLowerCase() === "general");
            }
            if (channel) {
                channel.join().then(connection => {
                    globals.voiceConnections[message.guild.id] = connection;
                });
            }
        }
    }

    info() {
        return [
            ["!join", "!join *channel*"]
        ];
    }
}

module.exports = new Join();