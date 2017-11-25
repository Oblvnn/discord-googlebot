exports.run = (client, message) => {
    message.channel.send({
        embed: {
            color: 0xffffff,
            description: ':ping_pong: **PONG!** - API Lantancy is **' + `${Date.now() - message.createdTimestamp}` + ' ms**',
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: `Heartbeat - ${Math.round(client.ping)}ms.`
            }
        }
    });
    return message.react("👌");
};