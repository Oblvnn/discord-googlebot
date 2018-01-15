const config = require(`../config.json`);
exports.run = (client, guild) => {
    console.log(`${client.user.username} has been removed from: ${guild.name} (id: ${guild.id})`);
	client.user.setActivity(`${client.guilds.size} Servers | ${config.prefix}help`, {type: 'WATCHING'});
};