module.exports = {
	name: 'list',
	description: '',
    execute(message) {
        message.guild.roles.cache.forEach(role => {
        message.channel.send(role.name);
         });  
        
        return message.channel.send("Above you will find a list of rolls. To interact with them just type @ before their name.");
}}