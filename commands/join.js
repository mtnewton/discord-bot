"use strict";

class Join {
    async handle(bot, message, args) {
        if (message.guild) {
            var channels = message.guild.channels.filter(c => c.type === 'voice');
            var channel;
            if (args.length) {
                channel = channels.find(c => c.name.toLowerCase() === args[0].toLowerCase());
            } else if (message.member) {
                channel = message.member.voiceChannel;
            }
            if (channel) {
                channel.join().then(connection => {
                    bot.voiceConnections[message.guild.id] = connection;
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