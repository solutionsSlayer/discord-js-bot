const mongoose = require('mongoose');
const { Guild } = require('../models/index');
const { defaultSettings: defaults } = require('../config');

module.exports = async client => {
    client.createGuild = async guild => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
        const createGuild = await new Guild(merged);
        await createGuild.save().then(d => console.log(`Guild create: ${d.guildName}`));
    }

    client.getGuild = async guild => {
        const server = await Guild.findOne({ guildID: guild.id });
        if(server) return server;
        return defaults.defaultSettings;
    }

    client.updateGuild = async (guild, settings) => {
        const data = await client.getGuild(guild);
        if(typeof data !== 'object') data = {};
        
        for(let el in settings) {
            if(settings[el] !== data[el]) data[el] = settings[el];
        }

        return data.updateOne(settings);
    }
}