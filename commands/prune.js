module.exports = {
    name: 'prune',
    description: 'do they prune',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('pay attention in math retard that ain\'t a number');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('numbers between 1 and 99 only :)');
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('error oopsie my bad :3');
        });
    },
};