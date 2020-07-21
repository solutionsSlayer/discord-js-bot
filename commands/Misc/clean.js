const { MESSAGES } = require('../../util/constants');

module.exports.execute = (client, message, args) => {
    let deleteAmount;

    if(parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } 
    else if (args[0] === undefined) {
        deleteAmount = 2;
    } 
    else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount);
    message.member.send('Message supprimés.')
}

module.exports.help = MESSAGES.COMMANDS.MISC.CLEAN;
