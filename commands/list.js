const Discord = require('discord.js');
module.exports = {
    name: 'roles',
    cooldown: 10,
    description: 'Creates a list of Roles',
    usage: '!list',
    aliases: ['list', 'r', 'rolelist'],
    execute(message) {
        const RoleList = new Discord.MessageEmbed().setTitle('List of Roles');
        
        message.guild.roles.cache.forEach(role => {
            RoleList.addField('Role', '# of users')
            RoleList.addField(`${role.name}`, `${role.members.size} `, true)});
            RoleList.setDescription ( 'This is how many people have them');
            RoleList.setColor('#FFFF00');


        message.author.send(RoleList);
        message.reply('I\'ve sent you a DM with a list of roles.');}}