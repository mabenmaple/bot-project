module.exports = {
    name: 'server',
    description: 'stuff about server',
    execute(message) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};