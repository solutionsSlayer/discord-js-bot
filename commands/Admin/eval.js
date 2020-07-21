const { deleteMessage } = require('../../util/deleteMessage');
const { MESSAGES } = require('../../util/constants');

module.exports = {
    async execute(client, message, args) { 
        function clean(text) {
            if(typeof text === 'string') {
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            }
            return text;
        }

        if(message.author.id !== '571016006173196288') return;
        const code = args.join(' ');
        const evaled = eval(code);
        const cleanCode = await clean(evaled);
        message.channel.send(cleanCode, { code: 'js' })
    }
}

module.exports.help = MESSAGES.COMMANDS.ADMIN.EVAL;
