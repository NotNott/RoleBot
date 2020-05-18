module.exports = {
	name: 'create',
	description: '',
    execute(message, Name){ 
        console.log(Name)
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
            console.log(error);
            console.log(Name);}
            return message.reply ('You have made a new role called ' + `${Name}`);}}
   