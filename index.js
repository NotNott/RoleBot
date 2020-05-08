const discord = require ('discord.js');
const bot = new discord.Client();
const {prefix, token} = require('./config.json');
const {help} = require ('./help.js');
const fs = require('fs');

var helpList = fs.readFileSync('./Helplist.txt', 'utf-8');

bot.login(token);
//help menu
bot.on(help)
    
    //'message', (message) => {
//    if (!message.content.startsWith(prefix) || message.author.bot) return;
//    const args = message.content.slice(prefix.length).split(' ');
 //   const command = args.shift().toLowerCase();
//
//    if (command == 'help'){
//
 //   return message.channel.send (helpList);
//}})
//create roles
bot.on('message', (message, guild) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('MANAGE_ROLES')) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'create' && !args[1]){
        
        message.guild.roles.create(
        {
            data: {
              name : args[0],
              color : Math.floor(Math.random() * 16777214) + 1,        
        },
            reason: 'We are Lazy.',       
        })
            .then(console.log)
            .catch(console.error);
            return message.reply ('You have made a new role.')}
    if (command == 'create'){
        
        message.guild.roles.create(
                {
            data: {
                name : args[0] + ' ' + args[1],
                color : Math.floor(Math.random() * 16777214) + 1,        
                },
            reason: 'We are Lazy.',       
                })
                    .then(console.log)
                    .catch(console.error);
                    return message.reply ('You have made a new role.')
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
//add roles to user
bot.on('message', (message, guild) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('MANAGE_ROLES')) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();
    
    if (command == "give" && !args[2])  { 
        //if (args.length == 1){
        var user = message.mentions.members.first();
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        if(!user) return message.reply ("Aint nobody named that.");
         
        else user.roles.add(role);
          return message.reply ("Role Be There.")}

    if (command == "give")  { 
        
        var user = message.mentions.members.first();
        var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
        if(!role) return message.reply(args[0] +' '+ args[1]+ " aint a roll");
        if(!user) return message.reply ("Aint nobody named that.");
             
        else user.roles.add(role);
        return message.reply ("Role Be There.")
    
    
        }});
//remove roles form user
bot.on('message', (message, guild, client, ) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('MANAGE_ROLES')) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

    if (command == "take" && !args[2]){
        var user = message.mentions.members.first();
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        if(!user) return message.reply ("Aint nobody named that.");
         
        else user.roles.remove(role);
          return message.reply ("Role Be Gone.")}

          if (command == "take"){
            var user = message.mentions.members.first();
            var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
            if(!role) return message.reply(args[0] +' '+ args[1] + " aint a roll");
            if(!user) return message.reply ("Aint nobody named that.");
             
            else user.roles.remove(role);
              return message.reply ("Role Be Gone.")
           
       
}});
//delete roles
bot.on('message', (message, guild, client, ) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('MANAGE_ROLES')) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

        if (command == "delete" && !args[1]) {
            var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
            if(!role) return message.reply(args[0] + " aint a roll");

            else role.delete();
            return message.reply("deleted " + args[0])}

            if (command == "delete" ) {
                var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
                if(!role) return message.reply(args[0] + ' ' + args[1] + " aint a roll");
    
                else role.delete();
                return message.reply("deleted " + args[0] + ' ' + args[1])

        }



})
//add roles to self
bot.on('message', (message, guild, client, ) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

    if (command == "add" && !args[1]){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
         
        else message.member.roles.add(role);
          return message.reply ("Role be on you.")}

          if (command == "add"){
            var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
            if(!role) return message.reply(args[0] + ' ' + args[1] + " aint a roll");
             
            else message.member.roles.add(role);
              return message.reply ("Role be on you.")
       
}});
//remove roles from self
bot.on('message', (message, guild, client, ) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();

    if (command == "remove" && !args[1]){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        
        else message.member.roles.remove(role);
          return message.reply ("Role be gone from you.")}

          if (command == "remove"){
            var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
            if(!role) return message.reply(args[0] + ' ' + args[1] + " aint a roll");
            
            else message.member.roles.remove(role);
              return message.reply ("Role be gone from you.")
       
}});
