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
    const commandName = args.shift().toLowerCase();
    const Role = message.mentions.roles.first(99);
    const Name = args.join(' ');
    const User = message.mentions.members.first(99);
    const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (!command) return message.channel.send("That is not one of my commands.");
  
    if (commandName == 'create' || commandName == 'c' || commandName == 'make') {
      command.execute(message, Name);
    }
    else try{
      command.execute(message, Role, User);
      } catch(e){
          console.log(error);

    if (Role.length == 0) {return message.channel.send('Sorry, that role was not found.')}
    if (User.length == 0) {return message.reply ("That name does not match a user.");}
    
    }});



