const discord = require ('discord.js');
const bot = new discord.Client();
const {prefix, token} = require('./config.json');

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

//help menu
bot.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'help'){

    return message.channel.send (helpList);
}});

bot.on('message', (message, guild) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('MANAGE_ROLES')) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'create'){
      bot.commands.get('create').execute(message, args);}

    else if (command == 'give'){
      bot.commands.get('give').execute(message, args);}
        
    else if (command == 'take'){
      bot.commands.get('take').execute(message, args);}
          
    else if (command == 'delete'){
      bot.commands.get('delete').execute(message, args);}
            
    else if (command == 'add'){
      bot.commands.get('add').execute(message, args);}

    else if (command == 'remove'){
      bot.commands.get('remove').execute(message, args);}  

    else if (command == 'perm'){
      bot.commands.get('perm').execute(message, args);}

    //else if (command == 'color'){
      //bot.commands.get('color').execute(message, args);}
       
})
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
});
            
bot.on('message', (message, guild, client, ) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

    if (command == "blue" && !args[1]){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        
        else role.edit( {color : '#0000ff' })
          return message.reply ("Role has blue")}

          if (command == "blue"){
            var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
            if(!role) return message.reply(args[0] + ' ' + args[1] + " aint a roll");
            
            else role.edit( {color : '#0000ff' })
              return message.reply ("Role has blue")
       
              
}});
bot.on('message', (message, guild, client, ) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

    if (command == "red" && !args[1]){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        
        else role.edit( {color : '#FF0000' })
          return message.reply ("Role has red")}

          if (command == "red"){
            var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
            if(!role) return message.reply(args[0] + ' ' + args[1] + " aint a roll");
            
            else role.edit( {color : '#FF0000' })
              return message.reply ("Role has red")
       
              
}});
bot.on('message', (message, guild, client, ) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

    if (command == "green" && !args[1]){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        
        else role.edit( {color : '#008000' })
          return message.reply ("Role has green")}

          if (command == "green"){
            var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
            if(!role) return message.reply(args[0] + ' ' + args[1] + " aint a roll");
            
            else role.edit( {color : '#008000' })
              return message.reply ("Role has green")
       

}});
bot.on('message', (message, guild, client, ) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

    if (command == "yellow" && !args[1]){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        
        else role.edit( {color : '#FFFF00' })
          return message.reply ("Role has yellow")}

          if (command == "yellow"){
            var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
            if(!role) return message.reply(args[0] + ' ' + args[1] + " aint a roll");
            
            else role.edit( {color : '#FFFF00' })
              return message.reply ("Role has yellow")
       
              
}});
bot.on('message', (message, guild, client, ) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

    if (command == "pink" && !args[1]){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        
        else role.edit( {color : '#FF69B4' })
          return message.reply ("Role has Hot Pink")}

          if (command == "pink"){
            var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
            if(!role) return message.reply(args[0] + ' ' + args[1] + " aint a roll");
            
            else role.edit( {color : '##FF69B4' })
              return message.reply ("Role has Hot Pink")
       
              
}});
