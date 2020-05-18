module.exports = {
	name: 'delete',
    description: '',
    aliases: ['d','del'],
    execute(message, Role){
        Role.forEach(role =>{
        role.delete()
        })
        return message.channel.send (`${Role} deleted.`)}}
 

  