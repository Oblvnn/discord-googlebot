const Discord = require(`discord.js`);
const config = require(`../config.json`);
exports.run = (client) => {
    console.log(`[Bot is online | Node: ${process.version} | Discord.js: ${Discord.version}]\nConnected as: ${client.user.username} (ID: ${client.user.id})\nGuilds Connected: ${client.guilds.size}`);
	client.user.setActivity(`${client.guilds.size} Servers | ${config.prefix}help`, {type: 'WATCHING'});
};