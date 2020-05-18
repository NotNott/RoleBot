module.exports = {
	name: 'delete',
	description: '',
    execute(message, Role){
        Role.forEach(role =>{
        role.delete()
        })
        return message.channel.send (`${Role} deleted.`)}}
 

  