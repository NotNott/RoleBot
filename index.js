const discord = require ('discord.js');
const bot = new discord.Client();
const {prefix, token} = require('./config.json');

const fs = require('fs');

var helpList = fs.readFileSync('./Helplist.txt', 'utf-8');

bot.login(token);
//help menu
bot.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'help'){

    return message.channel.send (helpList);
}})
//create roles
bot.on('message', (message, guild) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('MANAGE_ROLES')) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'crole' && !args[1]){
        
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
    if (command == 'crole'){
        
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
    
    if (command == "frole"){
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
    
    if (command == "arole" && !args[2])  { 
        //if (args.length == 1){
        var user = message.mentions.members.first();
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        if(!user) return message.reply ("Aint nobody named that.");
         
        else user.roles.add(role);
          return message.reply ("Role Be There.")}

    if (command == "arole")  { 
        
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

    if (command == "rrole" && !args[2]){
        var user = message.mentions.members.first();
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        if(!user) return message.reply ("Aint nobody named that.");
         
        else user.roles.remove(role);
          return message.reply ("Role Be Gone.")}

          if (command == "rrole"){
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

        if (command == "drole" && !args[1]) {
            var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
            if(!role) return message.reply(args[0] + " aint a roll");

            else role.delete();
            return message.reply("deleted " + args[0])}

            if (command == "drole" ) {
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

    if (command == "parole" && !args[1]){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
         
        else message.member.roles.add(role);
          return message.reply ("Role be on you.")}

          if (command == "parole"){
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

    if (command == "prrole" && !args[1]){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        
        else message.member.roles.remove(role);
          return message.reply ("Role be gone from you.")}

          if (command == "prrole"){
            var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
            if(!role) return message.reply(args[0] + ' ' + args[1] + " aint a roll");
            
            else message.member.roles.remove(role);
              return message.reply ("Role be gone from you.")
       
}});
