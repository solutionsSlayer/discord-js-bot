const { MessageEmbed } = require('discord.js');

module.exports = async (client, channel) => {
    const fetchAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_DELETE'
    });

    const latestChannelDeleted = fetchAuditLogs.entries.first();
    const { executor } = latestChannelDeleted;

    const embed = new MessageEmbed()
        .setAuthor(`Création d'un nouveau chhannel.`)
        .setColor('#9640ca')
        .setDescription(`**Action**: Suppression d'un channel\n**Nom**: ${channel.name}`)
        .setFooter(executor.username, executor.displayAvatarURL())
        .setTimestamp()

    return client.channels.cache.get('729687196583329863').send(embed);
}