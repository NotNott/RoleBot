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


bot.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'help'){

    return message.channel.send (helpList);
}});


//list roles
bot.on('message', (message, guild) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('MANAGE_ROLES')) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();
    
    if (command == "list"){
        var role = message.guild.roles.cache.forEach(role => {
        message.channel.send(role.name);
         });     
        {
        return message.reply("Thems the roles.")


        }   
    }
  })

bot.on('message', async (message, guild) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('MANAGE_ROLES')) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    const role= message.member.guild.roles.cache.find(role => role.name === args.join(' '));
    const roleName = args.join(' ');
    
    
    if (command == 'create'){
      bot.commands.get('create').execute(message, roleName);}

    if (!role && command !== 'create' && command !== 'give' && command !== 'take') {return message.channel.send('Sorry, that role was not found.')}
         
    if (command == 'delete'){
      bot.commands.get('delete').execute(message, role);}
            
    if (command == 'add'){
      bot.commands.get('add').execute(message, role);}

    if (command == 'remove'){
      bot.commands.get('remove').execute(message, role);}  

    if (command == 'perm'){
      bot.commands.get('perm').execute(message, role);}

    if (command == 'blue'){
      bot.commands.get('blue').execute(message, role);}

    if (command == 'red'){
      bot.commands.get('red').execute(message, role);}

    if (command == 'green'){
      bot.commands.get('green').execute(message, role);}
          
    if (command == 'yellow'){
      bot.commands.get('yellow').execute(message, role);}
            
    if (command == 'pink'){
      bot.commands.get('pink').execute(message, role);}
      
    });


bot.on('message', async (message, guild) => {     
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('MANAGE_ROLES')) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    const User = message.mentions.members.first();
   // const realUser= message.member.cache.find(user => user.id === buser)
    
    if (!User && (command == 'give' || command == 'take') ) {return message.reply ("Aint nobody named here.");}

    if (command == 'give'){
      bot.commands.get('give').execute(message, args, User);}
          
    if (command == 'take'){
      bot.commands.get('take').execute(message, args, User);}
       
})