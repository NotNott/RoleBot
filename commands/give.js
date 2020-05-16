module.exports = {
	name: 'give',
	description: '',
  execute(message, userRole, user){ 
    user.roles.add(userRole);
      return message.send ("Role Be There.");}}
