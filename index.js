const discord = require ('discord.js');
const bot = new discord.Client();
const {prefix, token, prefix2} = require('./config.json');
const fs = require('fs');

var helpList = fs.readFileSync('./Helplist.txt', 'utf-8');

bot.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);}

bot.login(token);

bot.on('message', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('MANAGE_ROLES')) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    const Role = message.mentions.roles.first(99);
    const Name = args.join(' ');
    const User = message.mentions.members.first(99);
    
    if (Role.length == 0 && command !== 'create' && command !== 'help' && command !== 'list') {return message.channel.send('Sorry, that role was not found.')}
    if (User.length == 0 && (command == 'give' || command == 'take') ) {return message.reply ("That name doesnt match a user.");}
    
    if (command == 'create') {
      bot.commands.get(command).execute(message, Name);
    }
    else try{
      bot.commands.get(command).execute(message, Role, User);
      } catch(e){
          console.log(error);
    }});



