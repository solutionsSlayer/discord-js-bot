const { MESSAGES } = require('../../util/constants');

module.exports = {
    async execute(client, message, args, settings) {
        const getSetting = args[0];
        const newSetting = args.slice(1).join(' ');

        switch(getSetting) {
            case 'prefix': {
                if(newSetting) {
                    await client.updateGuild(message.guild,  { prefix: newSetting });
                    return message.author.send(`Prefix mis à jour: \`${newSetting}\``);
                }
                return message.author.send(`Prefix actuel:\`${settings.prefix}\``);
                break;
            }
            case 'logChannel': {
                if(newSetting) {
                    await client.updateGuild(message.guild,  { logChannel: newSetting });
                    return message.author.send(`logChannel mis à jour: \`${newSetting}\``);
                }
                return message.author.send(`logChannel actuel:\`${settings.logChannel}\``);
                break;
            }
            case 'welcomeMessage': {
                if(newSetting) {
                    await client.updateGuild(message.guild,  { welcomeMessage: newSetting });
                    return message.author.send(`welcomeMessage mis à jour: \`${newSetting}\``);
                }
                return message.author.send(`welcomeMessage actuel:\`${settings.welcomeMessage}\``);
                break;
            }
        }
    }
}

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIG;
