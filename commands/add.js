module.exports = {
  name: 'add',
  description: '',
  execute(message, Role) {
    try{
      message.member.roles.add(Role);
        return message.reply (`${Role} is now in your list of rolls`)
    }catch(e){
        //
    }}}
   

          
