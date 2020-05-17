module.exports = {
	name: 'list',
	description: '',
    execute(message, guild) {
        var role = message.guild.roles.cache.forEach(role => {
        message.channel.send(role.name);
         });     
        {
        return message.reply("Thems the roles.")
}}}