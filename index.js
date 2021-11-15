// require the discord module
const {Client, Intents, Collection} = require('discord.js');
const {token} = require('.config.json');
const fs = require('fs');

const client = new Client({ Intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
	const command = require('./commands/${file}');
	// set new item in collection
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

// dont forget to run node deploy-commands.js 
client.on('interactionCreate', async interaction => {
	if(!interaction.isCommand()) return;

	const command = clients.commands.get(interaction.commandName);

	if(!command) return;

	try {
		await command.execute(interaction);
	} catch(error){
		console.error(error);
		await interaction.reply({ content: 'There was an error with that command', ephemeral: true});
	}
});
client.login(token);
