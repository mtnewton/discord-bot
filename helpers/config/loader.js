"use strict";

module.exports = (() => {
    var config = require('./default.json');
    var user = require('../../config.json');
    return Object.assign(config, user);
})();