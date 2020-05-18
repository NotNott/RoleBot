module.exports = {
  name: 'take',
  description: 'Removes roles from the selected users list of roles.',
  usage: '!take @user @role',
  aliases: ['t'],
  execute(message, Role, User){ 
     try{ 
       User.forEach(user => {
         user.roles.remove(Role)
       });
        return message.channel.send (`${Role} removed from ${User} list of rolls.`);
      }catch(e){
        //
      }}}
  
    