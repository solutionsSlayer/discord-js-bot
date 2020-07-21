const { deleteMessage } = require('../../util/deleteMessage');
const { MessageEmbed } = require('discord.js');

module.exports = async (client, messageReaction, user) => {
    if (messageReaction.partial) {
        try {
            await messageReaction.fetch();
        } catch (error) {
            console.log('Something went wrong when fetching the message: ', error);
            return;
        }
    }

    let messageID, messageEmbed, modo;
    const message = messageReaction.message;

    const messageBelongToReaction = message;
    const artistCheck = messageBelongToReaction.embeds[0].title.includes('Artist');
    const UserIdSentence = messageBelongToReaction.embeds[0].description;
    const start = UserIdSentence.indexOf('@') + 1;
    const end = UserIdSentence.indexOf('>');
    const UserId = UserIdSentence.slice(start, end);
    const memberObject = message.guild.members.cache.get(UserId);
    const memberCacheRoles = memberObject.roles;
    const member = memberObject.user;

    const emoji = messageReaction.emoji.name;
    const twitchRole = message.guild.roles.cache.get('728549402557546527');
    const artistRole = message.guild.roles.cache.get('729784569435390528');
    const partnerRole = message.guild.roles.cache.get('729612842675994665');
    const streamerRole = message.guild.roles.cache.get('728549523789447178');

    console.log(partnerRole)

    const sendLogs = (cause, modo, role, member) => {
        let membeR
        const embed = new MessageEmbed()
            .setColor('#9640ca')
            .setDescription(`<@&728549402557546527>: <@${member.id}> | ${member.id}\n<@&728549866552426516>: <@${user.id}> | ${user.id}\n\n**Action:** ${cause} ${role}.`)
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL())

        client.channels.cache.get('729687196583329863').send(embed);
    }

    if (user.bot) return;

    if (['logotwitch', 'partner', '✅', '❌', '🖌️'].includes(emoji)) {
        switch (emoji) {
            case 'logotwitch':
                memberCacheRoles.add(twitchRole);
                member.send(`Tu possèdes désormais le rôle \`@Twitch User\`!`);
                modo = messageReaction.users.cache.last();
                sendLogs('Ajout du rôle', `<@${modo.id}>`, `<@&${twitchRole.id}>`, member);
                break;
            case '🖌️':
                modo = messageReaction.users.cache.last();
                if (!memberObject._roles.includes('729784569435390528')) {
                    memberCacheRoles.add(artistRole);
                    member.send(`Tu possèdes désormais le rôle \`@Artist\`!`);
                    sendLogs('Ajout du rôle', `<@${modo.id}>`, `<@&${artistRole.id}>`, member);
                } else {
                    memberCacheRoles.remove(artistRole);
                    message.channel.send(`Le rôle \`@Artist\` vient d'être retiré à <@${member.id}>`)
                    deleteMessage(message);
                    sendLogs('Retrait du rôle', `<@${modo.id}>`, `<@&${artistRole.id}>`, member);
                    member.send(`Tu ne possèdes plus le rôle \`@Artist\`!`);
                }
                messageID = message.id;
                messageEmbed = message.channel.messages.resolve(messageID);
                message.reactions.cache.get('🖌️').remove();
                messageEmbed.react('🖌️');
                break;
            case 'partner':
                modo = messageReaction.users.cache.last();
                if (!memberObject._roles.includes('729612842675994665')) {
                    memberCacheRoles.add(partnerRole);
                    member.send(`Tu possèdes désormais le rôle \`@Twitch Partner\`!`);
                    sendLogs('Ajout du rôle', `<@${modo.id}>`, `<@&${partnerRole.id}>`, member);
                } else {
                    memberCacheRoles.remove(partnerRole);
                    message.channel.send(`Le rôle \`@Twitch Partner\` vient d'être retiré à <@${member.id}>`)
                    deleteMessage(message);
                    sendLogs('Retrait du rôle', `<@${modo.id}>`, `<@&${partnerRole.id}>`, member);
                    member.send(`Tu ne possèdes plus le rôle \`@Twitch Partner\``);
                }
                messageID = message.id;
                messageEmbed = message.channel.messages.resolve(messageID);
                message.reactions.cache.get('732538487386931302').remove();
                messageEmbed.react('732538487386931302');
                break;
            case '✅':
                modo = messageReaction.users.cache.last();
                if (!memberObject._roles.includes('728549523789447178')) {
                    memberCacheRoles.add(streamerRole);
                    member.send(`Tu possèdes désormais le rôle \`@Twitch Streamer!\``);
                    sendLogs('Ajout du rôle', `<@${modo.id}>`, `<@&${streamerRole.id}>`, member);
                } else {
                    memberCacheRoles.remove(streamerRole);
                    message.channel.send(`Le rôle \`@Twitch Streamer\` vient d'être retiré à <@${member.id}>`)
                    deleteMessage(message);
                    member.send(`Tu ne possèdes plus le rôle \`@Twitch Streamer\``);
                    sendLogs('Retrait du rôle', `<@${modo.id}>`, `<@&${streamerRole.id}>`, member);
                }
                messageID = message.id;
                messageEmbed = message.channel.messages.resolve(messageID);
                message.reactions.cache.get('✅').remove();
                messageEmbed.react('✅');
                break;

            case '❌':
                messageID = message.id;
                messageEmbed = message.channel.messages.resolve(messageID);

                if(artistCheck) member.send(`Ta demande pour obtenir le rôle \`@Artist\` n'a pas pu aboutir`);
                else {
                    member.send(`Malheureusement, ta demande pour l'obtention du rôle @Twitch Streamer n'a pas pu aboutir. Vérifie bien que ton compte Twitch est relié à ton compte Discord et qu'il soit visible pour tous !\n\nRappel: Pour obtenir le rôle @Twitch Streamer, tu dois être Affilié Twitch.\nPlus d'informations ici: https://help.twitch.tv/s/article/twitch-affiliate-program-faq`);
                }
                messageEmbed.delete();
                sendLogs('Demande refusée');
                break;
        }
    }
}