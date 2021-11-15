// Dependencies
const fetch = require('node-fetch'),
        {MessageEmbed} = require('discord.js'),
        Command = require('../../structures/Command.js');

module.exports = class Advice extends Command{
    constructor(bot){
        super(bot, {
            name: 'advice',
            dirname: __dirname,
            botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
            description: 'Give random advice',
            usage: 'advice',
            cooldown: 1000,
        });
    }


    // run 
    async run(bot, message){
        // sends waiting message 
        const message = await.message.channel.send(message.translate('misc:FETCHING', {
            EMOJI: message.checkEmoji()? bot.customEmojis['loading'] : '', ITEM: this.help.name      
        }));
        // connect to API 
    }
}