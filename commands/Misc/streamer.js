const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require('../../util/constants');

module.exports = {
    name: 'streamer',
    async execute(client, message) { 
        if (message.partial) {
            try {
                await message.fetch();
            } catch (error) {
                console.log('Something went wrong when fetching the message: ', error);
                return;
            }
        }

        const partnerEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'partner');
        const channelCommand = client.channels.cache.get('728589158578257951');
        const messageError = 'Cette commande est uniquement exécutable dans le salon <#728589158578257951> !';
        const member = message.guild.members.cache.get(message.member.id);
        const { deleteMessage } = require('./../../util/deleteMessage');
        
        // Check channel
        if(message.channel.id !== channelCommand.id) {
            member.send(messageError);
            deleteMessage(message);
            return;
        }

        if (member.roles.cache.has('728549523789447178') && member.roles.cache.has('729612842675994665')) return member.send(' Vous possédez déjà le(s) rôle(s) demandé(s)');

        // Confirm request
        member.send(`Ta demande a été prise en compte <@${member.id}> ! Vérifie bien que ton compte Twitch est relié à ton compte Discord et qu'il soit visible pour tous !`);

        // Send embed role assignment
        const embed = new MessageEmbed()
        .setTitle('**Role Ticket: Twitch Streamer**')
        .setColor('#9640ca')
        .setDescription(`User: <@${member.id}> | UserID: ${member.id}`)
        .setTimestamp()
        client.channels.cache.get('728586658315894825').send(embed).then(async msg => {
            msg.react(partnerEmoji)
            .then(() => {
                msg.react('✅');
            }).then(() => {
                msg.react('❌');
            })
        });

        deleteMessage(message);
    }
}

module.exports.help = MESSAGES.COMMANDS.MISC.STREAMER;
