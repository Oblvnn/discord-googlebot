const Discord = require(`discord.js`);
exports.run = (client, message) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} Icon`)
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setColor(0xffffff);
message.channel.send({
    embed: embed
});
return message.react("👌");
};