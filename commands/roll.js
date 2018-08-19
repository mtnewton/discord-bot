"use strict";

class Roll {
    async handle(globals, message, args) {
        var min, max;
        if (args.length == 1) {
            min = 1;
            max = parseInt(args[0])
        } else if (args.length == 2) {
            min = parseInt(args[0])
            max = parseInt(args[1])
        } else {
            min = 1;
            max = 100;
        }

        if (isNaN(min) || isNaN(max) || min >max) {
            return
        }

        this._say(message, this._roll(min, max));
    }

    info() {
        return [
            ["!roll", "!roll *max*", "!roll *min* *max*"]
        ];
    }

    _roll(min, max) {
        return Math.floor(Math.random() * (max-min+1)) + min;
    }

    _say(message, result) {
        message.channel.send('<@'+message.author.id+'> has rolled a ' + result);
    }

}

module.exports = new Roll();