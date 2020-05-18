module.exports = {
	name: 'give',
  description: '',
  aliases:['g'],
  execute(message, Role, User){  
    User.forEach(user => {
      user.roles.add(Role)});
        return message.channel.send (`${Role} has been added to  ${User}'s list of rolls.`);}}