const discord = require ('discord.js');
const bot = new discord.Client();
const {prefix, token} = require('./config.json');

bot.login(token);

bot.on('message', (message, guild) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'crole' ){
        
        message.guild.roles.create(
        {
            data: {
              name : args[0] + ' ' + args[1],
              color : args[2],        
        },
            reason: 'We are Lazy.',       
        })
            .then(console.log)
            .catch(console.error);
            return message.reply ('You have made a new role.')
    }});
bot.on('message', (message, guild) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();
    
    if (command == "frole"){
        message.guild.roles.fetch("member")
        return message.reply ('You'+  +'roles.')
    

    }});
bot.on('message', (message, guild) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();
    
    if (command == "arole"){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]+args[1]);
        if(!role) return message.reply("role dont be here.");
        else message.member.roles.add(role);{
            return message.reply ("Role Be Here.")
        }
    }});
bot.on('message', (message, guild) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
        
            const args = message.content.slice(prefix.length).split(' ');
            const command = args.shift().toLowerCase();
        
    if (command == "rrole"){
            var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
            if(!role) return message.reply("role dont be here.");
            else message.member.roles.remove(role);{
                return message.reply ("Role Be Gone.")
           
 
    }};

bot.on('message', (message, guild) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

    if (command == "drole"){
        guild.roles.find(role => role.name === args[0]).delete();
            return message.reply ("Role Be Gone.")
   
       
    }
});

 })
