"use strict";

class Command {
    async handle(bot, message, args) {
        var info = [];
        Object.keys(bot.commandLoader.commands).forEach(command => {
            var calls = bot.commandLoader.get(command).info();
            var result = "";
            calls.forEach(call => {
                result += '**' + call.shift() + '**';
                call.forEach(item => {
                    result += "\n\t" + item;
                });
            });
            info.push(result);
        });
        message.channel.send(info.join("\n"));
    }

    info() {
        return [
            ["!commands"]
        ];
    }
}

module.exports = new Command();