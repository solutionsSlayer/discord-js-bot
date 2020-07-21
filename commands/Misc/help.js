const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require('../../util/constants');

module.exports = {
    name: 'help',
    async execute(client, message) { 
        if (message.partial) {
            try {
                await message.fetch();
            } catch (error) {
                console.log('Something went wrong when fetching the message: ', error);
                return;
            }
        }

        function getCommands(commands) {
            let tab = [];
            commands.forEach(command => {
                let newObj = {
                    name: `\`!${command.help.name}\`\n`,
                    value: `**Description**: ${command.help.description}\n**Command: **:\`${command.help.usage}\``
                }
                tab.push(newObj);
            });
            return tab;
        }

        const commands = getCommands(client.commands);

        const embed = new MessageEmbed()
        .setTitle('**Help**')
        .setColor('#9640ca')
        .setDescription(`Commands:`)
        .addFields(commands)

        message.channel.send(embed);
    }
}

module.exports.help = MESSAGES.COMMANDS.MISC.HELP;
