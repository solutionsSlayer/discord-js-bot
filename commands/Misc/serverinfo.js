const { MESSAGES } = require('../../util/constants');

module.exports = {
    execute(client, message, args) { 
        message.channel.send(`Je suis l'utilisateur ${message.author.tag}!`);
    }
}

module.exports.help = MESSAGES.COMMANDS.MISC.SERVERINFO;