const server = require('./util/mongoose');
const loader = require('./util/loader');
const { Client, Collection } = require('discord.js');
const { token } = require('./config');

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message, err.stack);
  process.exit(1);
});

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
require('./util/functions')(client);
client.config = require('./config');
client.commands = new Collection();

loader.loadCommands(client);
loader.loadEvents(client);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message, err.stack);
  server.close(() => {
    process.exit(1);
  });
});

server.connexion();
client.login(token); 