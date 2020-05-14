module.exports = {
	name: 'take',
	description: '',
    execute(message, args,){ 
    if(!args[2]){

    var user = message.mentions.members.first();
    var role= message.member.guild.roles.cache.find(role => role.name === args[0]);

    if(!role) return message.reply(args[0] + " aint a roll");
    if(!user) return message.reply ("Aint nobody named that.");
     
    else user.roles.remove(role);
      return message.reply ("Role Be Gone.");}



      if (!args[3]){
        var user = message.mentions.members.first();
        var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);

        if(!role) return message.reply(args[0] +' '+ args[1] + " aint a roll");
        if(!user) return message.reply ("Aint nobody named that.");
         
        else user.roles.remove(role);
          return message.reply ("Role Be Gone.");}}}