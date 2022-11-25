module.exports = {
    name: 'avatar',
    description: 'Get avatar of tagged user/message author.',
    execute(message) {
        if (!message.mentions.users.size) {
            return message.channel.send(`${message.author.displayAvatarURL({ dynamic: true })}`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;
        });

        message.channel.send(avatarList);
    },
};
