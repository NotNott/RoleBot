module.exports = {
  name: 'add',
  description: 'Adds a role to your own list of rolls',
  usage: '!add @role',
  aliases: ['a'],
  execute(message, Role) {
    try{
      message.member.roles.add(Role);
        return message.reply (`${Role} is now in your list of rolls`)
    }catch(e){
        //
    }}}
   

          
