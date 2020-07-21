const { deleteMessage } = require('../../util/deleteMessage');
const { MESSAGES } = require('../../util/constants');

module.exports = {
    name: 'add',
    execute(client, message, args) {
        let arg = args.join(' ');

        const start = arg.indexOf('&') + 1;
        const end = arg.indexOf('>');
        const id = arg.slice(start, end);

        let role = message.guild.roles.cache.find(r => r.id === id);

        console.log(role);

        if (role) {
            if (message.member.roles.cache.has(role.id)) return message.member.send('Vous avez déjà ce rôle!');

            message.member.roles.add(role)
                .then(m => {
                    let newRole = role.name;
                    message.member.send(`Vous possédez désormais le rôle ${newRole}!`)
                    deleteMessage(message);
                })
                .catch(err => console.log(err));
        } else {
            message.channel.send('Le rôle n\'existe pas.');
        }
    }
}

module.exports.help = MESSAGES.COMMANDS.MISC.ADD;