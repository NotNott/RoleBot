module.exports = {
	name: 'create',
    description: 'Creates a new role',
    usage: '!create name',
    aliases: ['c', 'make'],
    execute(message, Name){ 
      try{   
        message.guild.roles.create(
        {
            data: {
              name : Name,
              color : Math.floor(Math.random() * 16777214) + 1,        
        },
            reason: 'We are Lazy.',       
        })}
            catch(error){
            console.log(error);}
            return message.reply (`You have made a new role called \"${Name}\"`);}}
   