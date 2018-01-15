const config = require(`../config.json`);
exports.run = (client, guild) => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
	client.user.setActivity(`${client.guilds.size} Servers | ${config.prefix}help`, {type: 'WATCHING'});
};