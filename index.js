const config = require('./config.json');
const dotenv = require('dotenv');
dotenv.config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);

client.on('message', message => {
	console.log(message.content);

	const skynetrole = message.guild.roles.cache.find(role => role.name == 'Skynet');
	if(!skynetrole) return console.log('Role doesen\'t exist.');

	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'skyquote') {
		message.channel.send('Ill be back');
	}
	else if (command === 'skynetrole') {
		message.channel.send('Welcome!');
		message.member.roles.add(skynetrole);
	}

	if (args[0] === 'foo') {
		return message.channel.send('bar');
	}

});
