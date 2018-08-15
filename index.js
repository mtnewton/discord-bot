require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = process.env.BOT_PREFIX;
const token = process.env.BOT_TOKEN;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', async message => {
    //ignore the bots messages
    if (message.author.bot) return;

    //ignore any message that doesnt start with the prefix
    if (message.content.indexOf(prefix) !== 0) return;

    const argv = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = argv.shift().toLowerCase();
    const argc = argv.length;

console.log(command);
    if (command === 'ping') {
        const m = await message.channel.send('Ping?');
        const latency = m.createdTimestamp - message.createdTimestamp;
        const apiLatency = Math.round(client.ping);
        m.edit(`Pong! Latency is ${latency}ms. API Latency is ${apiLatency}ms.`)
        return;
    }

});

client.login(token);