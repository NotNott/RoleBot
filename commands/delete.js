module.exports = {
	name: 'delete',
    description: 'Deletes an existing roll',
    usage: '!delete @role',
    aliases: ['d','del'],
    execute(message, Role){
        Role.forEach(role =>{
        role.delete()
        })
        return message.channel.send (`${Role} deleted.`)}}
 

  