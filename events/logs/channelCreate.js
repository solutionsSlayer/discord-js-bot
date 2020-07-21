const { MessageEmbed } = require('discord.js');

module.exports = async (client, channel) => {
    
    if(channel.type === 'dm') return;
    else {
        const fetchAuditLogs = await channel.guild.fetchAuditLogs({
            limit: 1,
            type: 'CHANNEL_CREATE'
        });
    
        const latestChannelCreated = fetchAuditLogs.entries.first();
        const { executor } = latestChannelCreated;
        
        const embed = new MessageEmbed()
            .setAuthor(`Création d'un nouveau chhannel.`)
            .setColor('#9640ca')
            .setDescription(`**Action**: création d'un channel\n**Raison**: ${channel.name}`)
            .setFooter(executor.username, executor.displayAvatarURL())
            .setTimestamp()
    
        return client.channels.cache.get('729687196583329863').send(embed);
    }
}