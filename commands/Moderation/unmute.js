const { MessageEmbed } = require('discord.js');
const { deleteMessage } = require('../../util/deleteMessage');
const { MESSAGES } = require('../../util/constants');

module.exports = {
    async  execute(client, message, args) { 
        try {
            let user = message.guild.member(message.mentions.users.first());
            let muted = message.guild.roles.cache.find(r => r.name === 'Muted');

            if(!user.roles.cache.has(muted.id)) return message.member.send(`L\'utilisateur <@${user.id}> n'est actuellement pas mute.`);

            await user.roles.remove(muted.id);
            message.member.send(`<@${user.id}> est unmute.`);

            const embed = new MessageEmbed()
            .setAuthor(`${user.username} ${user.id}`)
            .setColor('#9640ca')
            .setDescription(`**Action**: Unmute\n**Raison**:${reason}`)
            .setFooter(message.author.username, message.author.avatarURL())

            client.channels.cache.get('729687196583329863').send(embed);
            deleteMessage(message);
            
        } catch(err) {
            console.log(err)
        }   
    }
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;