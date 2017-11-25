const Discord = require(`discord.js`);
exports.run = (client, message) => {
    let args = message.content.split(/[ ]+/);
    if (args.length == 2 || message.content.includes("@")) {
        let user = message.mentions.members.first();
        let embed = new Discord.RichEmbed()
            .setTitle(user.user.username)
            .setURL(user.user.displayAvatarURL)
            .setImage(user.user.displayAvatarURL)
            .setFooter(`Avatar ID = ${user.user.avatar}`)
            .setColor(0xffffff);
        message.channel.send({
            embed: embed
        });
        return message.react("👌");
    } else message.channel.send({
        embed: {
            color: 0xffffff,
            description: `:warning: **${message.author.username}**, You didn't give me a valid user. {m!avatar \`@username\`}`,
            footer: {
                text: 'API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms'
            }
        }
    });
};