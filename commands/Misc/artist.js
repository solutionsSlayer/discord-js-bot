const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require('../../util/constants');

module.exports = {
    name: 'artist',
    async execute(client, message) { 
        if (message.partial) {
            try {
                await message.fetch();
            } catch (error) {
                console.log('Something went wrong when fetching the message: ', error);
                return;
            }
        }

        const channelCommand = client.channels.cache.get('728589158578257951');
        const messageError = 'Cette commande est uniquement exécutable dans le salon <#728589158578257951> !';
        const member = message.guild.members.cache.get(message.member.id);
        const { deleteMessage } = require('../../util/deleteMessage');
        
        if(message.channel.id !== channelCommand.id) {
            member.send(messageError);
            deleteMessage(message);
            return;
        }

        if (member.roles.cache.has('729784569435390528')) {
            deleteMessage(message);
            member.send('Vous possédez déjà le rôle demandé');
            return;
        } 

        member.send(`Ta demande a été prise en compte <@${member.id}> ! Dès qu'un modérateur sera disponible, il te contactera par message privé !`);

        const embed = new MessageEmbed()
        .setTitle('**Role Ticket: Artist**')
        .setColor('#9640ca')
        .setDescription(`User: <@${member.id}> | UserID: ${member.id}`)
        .setTimestamp()
        client.channels.cache.get('728586658315894825').send(embed).then(async msg => {
            msg.react('🖌️').then(() => {
                msg.react('❌');
            });
        });

        deleteMessage(message);
    }
}

module.exports.help = MESSAGES.COMMANDS.MISC.ARTIST;
