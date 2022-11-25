module.exports = {
    name: 'ratio',
    description:'ratios user',
    execute(message,args) {
        if(message.author.username === 'mabenmaple') {
            const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'choiW');
            message.react(reactionEmoji);
        } else if(message.author.username) {
            return message.reply('bozo');
        }
    },
};

