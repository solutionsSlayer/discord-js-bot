module.exports.deleteMessage = message => {
        setTimeout(() => {
            message.channel.lastMessage.delete();
        }, 500);
    }
