module.exports = {
	name: 'take',
	description: '',
  execute(message, Role, User){ 
     try{ 
       User.forEach(user => {
         user.roles.remove(Role)
       });
        return message.channel.send (`${Role} removed from  ${User}'s list of rolls.`);
      }catch(e){
        //
      }}}
  
    