const Discord = require('discord.js');
module.exports = {
    name: 'roles',
    cooldown: 10,
    description: 'Creates a list of Roles',
    usage: '!list',
    aliases: ['list', 'r', 'rolelist'],
    execute(message) {
        const RoleList = new Discord.MessageEmbed().setTitle('List of Roles');
            RoleList.addField('Role', '# of users')
            RoleList.setDescription ( 'Don\'t forget to @ them');
            RoleList.setColor('#FFFF00');
        message.guild.roles.cache.forEach(role => {
            RoleList.addField(`${role.name}`, `${role.members.size} `, true)});
           
        message.author.send(RoleList);
        message.reply('I\'ve sent you a DM with a list of roles.');}}