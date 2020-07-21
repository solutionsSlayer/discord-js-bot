const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require('../../util/constants');
const { deleteMessage } = require('../../util/deleteMessage');

const ms = require('ms');
module.exports = {
    async  execute(client, message, args) { 
        try {
            const findAsterix = (element) => element.startsWith('*');
            let user = message.guild.member(message.mentions.users.first());
            let muted = message.guild.roles.cache.find(r => r.name === 'Muted');
            let muteTime; args[1].startsWith('*') ? muteTime = '1h' : muteTime = args[1];
            let start = args.findIndex(findAsterix);
            let reason = args.slice(start, args.length[args.length-1]).join(' ') || 'Aucune raison spécifiée';

            if(!muted) {
                muted = await message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        color: '#9640ca',
                        permissions: []
                    }
                });
            }

            message.guild.channels.cache.forEach(async channel => {
                await channel.updateOverwrite(muted, {
                    SEND_MESSAGE: false,
                    ADD_REACTIONS: false,
                    CONNECT: false
                });

            });

            await user.roles.add(muted.id);
            message.member.send(`<@${user.id}> est mute pour une durée de ${ms(ms(muteTime))}`);

            const embed = new MessageEmbed()
                .setAuthor(`${user.username} ${user.id}`)
                .setColor('#9640ca')
                .setDescription(`**Action**: Mute\n**Durée**: ${ms(ms(muteTime))}\n**Raison**:${reason}`)
                .setTimestamp()
                .setFooter(message.author.username, message.author.avatarURL())

            client.channels.cache.get('729687196583329863').send(embed);
            deleteMessage(message);

            setTimeout(() => {
                user.roles.remove(muted.id);
            }, ms(muteTime));
        }  catch(err) {
            console.log(err);
        }
    }
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTE;
