const { SlashCommandBulder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBulder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },

};