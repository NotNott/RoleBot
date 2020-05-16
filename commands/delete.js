module.exports = {
	name: 'delete',
	description: '',
    execute(message, role){
        role.delete()
        return message.channel.send ("deleted")}}
 

  