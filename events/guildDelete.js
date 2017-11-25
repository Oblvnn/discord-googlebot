const config = require(`../config.json`);
exports.run = (client, guild) => {
    console.log(`${client.user.username} has been removed from: ${guild.name} (id: ${guild.id})`);
	client.user.setGame(`${config.prefix}help | ${client.guilds.size} Servers`, config.twitch);
};