module.exports = {
	name: 'give',
	description: '',
  execute(message, role, User){  
      User.roles.add(role);
        return message.channel.send (`${role} has been added to  ${User}'s list of rolls.`);}}