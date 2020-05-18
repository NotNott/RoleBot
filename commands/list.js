const Discord = require('discord.js');
module.exports = {
	name: 'list',
	description: '',
    execute(message) {
        const exampleEmbed = new Discord.MessageEmbed().setTitle('These are the roles and how many people have them.');
        
        message.guild.roles.cache.forEach(role => {
        exampleEmbed.addField(`${role.name}`, `${role.members.size} `, true)})   
        exampleEmbed.setColor('#FFFF00');
        exampleEmbed.setFooter("@ them to send a message or edit.")

        message.channel.send(exampleEmbed);}}