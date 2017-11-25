const config = require(`../config.json`);
const p = config.prefix;
const Discord = require(`discord.js`);
exports.run = (client, message) => {
	if (message.content === `${p}help`, message) {
		let embed = new Discord.RichEmbed()
			.setAuthor("GoogleBot's Command List", client.user.displayAvatarURL)
			.setDescription("GoogleBot developed by [**Oblivion サン#9469**](https://oblivionsan.tk) | [**Support Server**](https://discord.gg/kxNeGRC)")
			.setColor(`#ffffff`)
			.addField(`❯ General Commands`, `• **${p}google** : Responds with a Google search of your input.\n• **${p}invite** : DM's you a invite link for the bot.\n• **${p}translate** \`{lang} {input}\` : Translation from English to choosen language.\n• **${p}weather** : Responds with a weather statistic of your input.`)
			.addField(`❯ Utility Commands`, `• **${p}avatar** \`{@user}\` : Responds with a url linking to given user avatar.\n• **${p}channel** : Responds with the channel information.\n• **${p}emotes** : Responds with server emotes and amount.\n• **${p}icon** : Responds with a url linking to your server icon.\n• **${p}info** \`{@user}\` : Responds with given user information.\n• **${p}ping** : Responds with \`'PONG!'\` also displays api lantancy.\n• **${p}roles** : Responds with server roles with amount.\n• **${p}server** : Responds with the server information.\n• **${p}stats** : Responds with the bots statistics.\n`)
			.setTimestamp()
			.setFooter('API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms', client.user.avatarURL);
		message.author.send({
			embed: embed
		});
	}

	if (message.content === `${p}help`, message) {
		let embed = new Discord.RichEmbed()
			.setColor("#ffffff")
			.setDescription(`:inbox_tray: **${message.author.username}**, I've DM'd you a list of my commands.`);
		message.channel.send({
			embed: embed
		});
		return;
	}
};