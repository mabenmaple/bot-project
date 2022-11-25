module.exports = {
    name: 'user-info',
    description: 'if ur alzheimer',
    execute(message) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    },
};