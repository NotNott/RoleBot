module.exports = {
	name: 'take',
	description: '',
  execute(message, role, user){ 
    user.roles.remove(role);
      return message.channel.send ("Role Be Gone.");}}



    