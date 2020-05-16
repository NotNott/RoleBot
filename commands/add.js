module.exports = {
  name: 'add',
  description: '',
  execute(message, role) {
    message.member.roles.add(role);
      return message.reply ("Role be on you.")}}
   

          
