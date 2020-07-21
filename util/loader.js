const fs = require('fs');

const loadCommands = (client, dir = './commands/') => {
    fs.readdirSync(dir).forEach(dirs => {
      const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith('.js'));
  
      for (const file of commands) {
        const getFilename = require(`../${dir}/${dirs}/${file}`);
        client.commands.set(getFilename.help.name, getFilename);
        console.log(`Commandes chargée: ${getFilename.help.name}`);
      };
    });
  };
  
  const loadEvents = (client, dir = './events/') => {
    fs.readdirSync(dir).forEach(dirs => {
      const events = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith('.js'));
  
      for (const event of events) {
        const getEvent = require(`../${dir}/${dirs}/${event}`);
        const eventName = event.split('.')[0];
        client.on(eventName, getEvent.bind(null, client));
        console.log(eventName, getEvent);
      };
    });
  };

  module.exports = {
    loadCommands,
    loadEvents
  }