const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require('../../util/constants');

module.exports.execute = async (client, message, args) => {  

    const twitchEmoji = message.guild.emojis.cache.get('728931098192773120');
    const embed = new MessageEmbed()
        .setTitle('Rôles')
        .setColor('#9640ca')
        .setTitle('Bienvenue sur le discord de Twitch Community !')
        .setDescription("**Avant d'avoir accès à l'intégralité de notre discord, il vous est demandé de lire attentivement le salon: <#728558937963757608>, ensuite, réagissez avec l'émoji <:logotwitch:728931098192773120> en dessous du message pour recevoir le rôle commun de tous les utilisateurs: <@&728549402557546527> !**")
        .setThumbnail('https://cdn.discordapp.com/attachments/557634414826356740/722121421010108487/logotwitch.png')
        .setFooter('Cliquez sur la réaction ci-dessous pour obtenir le rôle.')
        
        client.channels.cache.get('728558802303189033').send(embed).then(async msg => {
            await msg.react(twitchEmoji);
        })
}

module.exports.help = MESSAGES.COMMANDS.REACTIONS.ALLROLES;