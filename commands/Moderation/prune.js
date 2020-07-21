const { deleteMessage } = require('../../util/deleteMessage');
const { MESSAGES } = require('../../util/constants');

module.exports = {
    async  execute(client, message, args) { 
        const user = message.guild.member(message.mentions.users.first());
        const messages = ( await message.channel.messages.fetch({
            limit: Math.min(args[1], 100)
        })).filter(msg => user.id === msg.author.id).array();

        messages.length = Math.min(args[1], messages.length);

        if(messages.length === 1) messages[0].delete();
        else await message.channel.bulkDelete(messages);

        message.member.send('Vos messages ont été supprimés.');
        deleteMessage(message);
    }
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.PRUNE;