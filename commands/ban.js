const { SlashCommandBuilder } = require('@discordjs/builders');
const { Message } = require('discord.js');
const { execute } = require('./beep');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a user')
        .addUserOption(option => option.setName('target').setDescription("The member to kick")),
    async execute(interaction, client) {
        const user = interaction.options.getUser('target');

        if(!user) {
            return interaction.reply('You need to mention the user you want to ban');
        }

        if(!interaction.user.permissions.has('BAN_MEMBERS')){
            return interaction.reply('You do not have admin permissions');
        }

        const userInfo = client.users.cache.get(user);

        return interaction.guild.members
      .ban(user)
      .then(() => {
        interaction.reply({
          content: `${userInfo.username} was banned.`,
          ephemeral: true,
        });
      })
      .catch(error =>
        interaction.reply({
          content: `Sorry, an error occured.`,
          ephemeral: true,
        }),
      );
  },
};