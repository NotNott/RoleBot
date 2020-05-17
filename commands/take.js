module.exports = {
	name: 'take',
	description: '',
  execute(message, role, User){ 
      User.roles.remove(role);
        return message.channel.send (`${role} has been removed from  ${User}'s list of rolls.`);}}

  
    