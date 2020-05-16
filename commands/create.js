module.exports = {
	name: 'create',
	description: '',
    execute(message, roleName){ 
        message.guild.roles.create(
        {
            data: {
              name : roleName,
              color : Math.floor(Math.random() * 16777214) + 1,        
        },
            reason: 'We are Lazy.',       
        })
            .then(console.log)
            .catch(console.error);
            return message.reply ('You have made a new role.');}

    }
   