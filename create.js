module.exports = {
	name: 'create',
	description: '',
    execute(message, args,){ 
        if (!args[0]) {return message.reply ('gotta say');}
        while (!args[1]){
        message.guild.roles.create(
        {
            data: {
              name : args[0],
              color : Math.floor(Math.random() * 16777214) + 1,        
        },
            reason: 'We are Lazy.',       
        })
            .then(console.log)
            .catch(console.error);
            return message.reply ('You have made a new role.');}

            if (!args[2]) {
            message.guild.roles.create(
                    {
                data: {
                    name : args[0] + ' ' + args[1],
                    color : Math.floor(Math.random() * 16777214) + 1,        
                    },
                reason: 'We are Lazy.',       
                    })
                        .then(console.log)
                        .catch(console.error);
                        return message.reply ('You have made a new role.');}}}

   