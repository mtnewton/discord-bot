"use strict";

class Command {
    async handle(globals, message, args) {
        var info = [];
        Object.keys(globals.commandLoader.commands).forEach(command => {
            var calls = globals.commandLoader.get(command).info();
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