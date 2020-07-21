const { deleteMessage } = require('../../util/deleteMessage');
const { MESSAGES } = require('../../util/constants');

module.exports = {
    async execute(client, message) {
        await message.delete();
        await client.channels.cache.get('729687196583329863').send('Le bot redémarre!');
        process.exit()
    }
}

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;