module.exports = {
    name: 'kick',
    description: 'kick someone',
    guildOnly: true,
    execute(message) {
        if (!message.mentions.users.size) {
            return message.reply('You need to tag someone to kick them dumbdumb.');
        }

        const taggedUser = message.mentions.users.first()

        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    },
};