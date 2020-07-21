module.exports = client => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.cache.get('729687196583329863').send('Le bot est OP!');
}