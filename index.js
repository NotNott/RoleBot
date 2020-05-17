const discord = require ('discord.js');
const bot = new discord.Client();
const {prefix, token, prefix2} = require('./config.json');

const fs = require('fs');
//client.commands = new Discord.collection();

var helpList = fs.readFileSync('./Helplist.txt', 'utf-8');

bot.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.login(token);

bot.on('message', async (message, guild, str) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('MANAGE_ROLES')) return;
    const args = message.content.slice(prefix.length).split(' ', 3) ;
    const command = args.shift().toLowerCase();
    const role = message.mentions.roles;
    const roleName = args.join(' ').raw;
    const User = message.mentions.users;
    
    if (!role && command !== 'create' && command !== 'give' && command !== 'take' && command !== 'help' && command !== 'list') {return message.channel.send('Sorry, that role was not found.')}
    if (!User && (command == 'give' || command == 'take') ) {return message.reply ("That name doesnt match a user.");}
     
    try{
      bot.commands.get(command).execute(message, role || roleName, User, guild, helpList);
    } catch(e){
      message.channel.send("Something has gone wrong.")
    }  

});



