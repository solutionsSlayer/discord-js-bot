const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require('../../util/constants');

module.exports = {
    execute(client, message, args) { 
        const user = message.mentions.users.first();
        const reason = args.splice(1).join(' ') || 'Aucune raison de spécifiée';
        const { deleteMessage } = require('../../util/deleteMessage');

        user ?
            message.guild.member(user).kick(reason) 
            : 
            message.member.send('L\'utilisateur n\'existe pas');
        
        const embed = new MessageEmbed()
            .setAuthor(`${user.username} ${user.id}`)
            .setColor('#9640ca')
            .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
            .setThumbnail(user.avatarURL())
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL())

        client.channels.cache.get('729687196583329863').send(embed);
        deleteMessage(message);
    }
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;
