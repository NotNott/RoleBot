module.exports = {
	name: 'give',
	description: '',
  execute(message, args, User){ 
    
    if(!args[2]){
      var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
      if(!role) {return message.reply(args[0] + " aint a roll");}
        User.roles.add(role);
        return message.channel.send (`${role.name} has been added to  ${User}'s list of rolls.`);}

    if(!args[3]) { 
      var role= message.member.guild.roles.cache.find(role => role.name === args[0] +' '+ args[1]);
      if(!role) return message.reply(args[0] +' '+ args[1]+ " aint a roll");
         User.roles.add(role);
         return message.channel.send (`${role.name} has been added to  ${User}'s list of rolls.`);}}}