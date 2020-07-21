const { MessageEmbed } = require('discord.js');

module.exports = (client, message) => {
    const reason = message.content;
    const user = message.author;

    if(user.bot) return;

    const embed = new MessageEmbed()
    .setAuthor(`${user.username} ${user.id}`)
    .setColor('#9640ca')
    .setDescription(`**Action**: ticket\n **Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(user.username, user.avatarURL())

    client.channels.cache.get('729687196583329863').send(embed);
    user.send('Nous avons reçu votre ticket nous le traiteront dés que possible!');
}