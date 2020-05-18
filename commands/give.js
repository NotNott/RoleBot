module.exports = {
	name: 'give',
  description: 'Adds a role/\'s to the selected users/\' list of roles.',
  usage: '!give @user @role',
  aliases:['g'],
  execute(message, Role, User){  
    User.forEach(user => {
      user.roles.add(Role)});
        return message.channel.send (`${Role} has been added to ${User} list of rolls.`);}}