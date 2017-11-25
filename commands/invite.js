const config = require(`../config.json`);
const p = config.prefix;
exports.run = (client, message) => {
    message.author.send({
        embed: {
            color: 0xffffff,
            title: "Discord Invite Link",
            url: `https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=${client.user.id}`,
            description: `Once invited, type \`${p}help\` to see my commands.`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: client.user.username
            }
        }
    });
    return message.react("👌");
};