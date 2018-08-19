"use strict";

class Ping {
    async handle(bot, message, args) {
        const m = await message.channel.send('Ping?');
        const latency = m.createdTimestamp - message.createdTimestamp;
        const apiLatency = Math.round(bot.client.ping);
        m.edit(`Pong! Latency is ${latency}ms. API Latency is ${apiLatency}ms.`);
    }

    info() {
        return [
            ["!ping"]
        ];
    }
}

module.exports = new Ping();