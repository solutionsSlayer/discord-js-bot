const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require('../../util/constants');
const { deleteMessage } = require('../../util/deleteMessage');

module.exports = {
    async  execute(client, message, args) { 
        const user = await client.users.fetch(args[0]);

        if(user) {
            message.guild.members.unban(`<@${user}>`);
        } else {
            message.member.send(`L\'utilisateur ${user.username} n'\existe pas`);
        }

        const embed = new MessageEmbed()
            .setAuthor(`${user.username} ${user.id}`)
            .setColor('#9640ca')
            .setDescription(`**Action**: Unban\n**Raison**:${reason}`)
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL())

        client.channels.cache.get('729687196583329863').send(embed);
        deleteMessage(message);
    }
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;
