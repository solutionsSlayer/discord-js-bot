const { MESSAGES } = require('../../util/constants');

module.exports = {
    execute(client, message, args) { 
      const user_mention = message.mentions.users.first();
      if(user_mention && user_mention !== undefined) {
        message.channel.send(`Voici le tag de la personne mentionné: ${user_mention.tag}`);
      }
    }
}

module.exports.help = MESSAGES.COMMANDS.MISC.USERINFO;
