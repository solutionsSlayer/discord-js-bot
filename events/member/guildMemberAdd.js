const { MessageEmbed } = require('discord.js');

module.exports = (client, member) => {
    const embed = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
        .setColor('#9640ca')
        .setFooter('Un utilisateur a rejoint le serveur!')
        .setTimestamp()

    return client.channels.cache.get('728714698438213662').send(embed);
}