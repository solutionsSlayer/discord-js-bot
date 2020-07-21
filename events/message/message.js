const { prefix } = require('../../config');

module.exports = async (client, message) => {
    if(message.channel.type === 'dm') return client.emit('directMessage', message);
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const settings = await client.getGuild(message.guild);
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const user = message.guild.member(message.mentions.users.first());
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));

    if(!command) return;

    if(command.help.isAdmin && !message.member.hasPermission('ADMINISTRATOR')) {
        return message.member.send(`Vous n'avez pas la permission d'exécuter la commande: !${commandName }`);
    }

    if(command.help.permission && !message.member.hasPermission('BAN_MEMBERS')) {
        return message.member.send(`Vous n'avez pas la permission d'exécuter la commande: !${commandName }`);
    }

    if(command.help.args && !args.length) {
        return message.member.send(`La commande nécéssite des arguments. Voici comment l'utiliser: \`${prefix}${commandName} arguments...\``);
    }

    if(command.help.isUserAdmin && !user) {
        return message.member.send(`Il faut mentionner un utilisateur!`);
    }

    if(command.help.isUserAdmin && message.guild.member(message.mentions.users.first()).hasPermission('BAN_MEMBERS')) {
        return message.member.send(`Vous ne pouvez pas éxécuter cette commande: !${commandName} sur cet utilisateur.`);
    }
    
    command.execute(client, message, args, settings);
}