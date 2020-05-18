module.exports = {
name: 'help',
description: 'Used to create a list of commands and to get a description of them.',
usage: '!help or !help command',
aliases: ['h', 'info'],
cooldown: 5,
args: true,
execute(message){
const { prefix } = require('../config.json');
const data = [];
const { commands } = message.client;
const args = message.content.slice(prefix.length).split(/ +/);
const name = args[1];
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if (args.length == 1){
    data.push('Here\'s a list of commands:');
    data.push(commands.map(command => command.name).join(', '));
    data.push(`\nYou can send \`${prefix}help command\` to get info on a specific command!`);
    
return message.author.send(data, { split: true })
    .then(() => {
        if (message.channel.type === 'dm') return;
        message.reply('you have been DMd a list of commands.');})

    .catch(error => {
        console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
        message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
});}

if (!command) {
return message.reply('that\'s not a command. Try !help for a list of available commands.');}

data.push(`**Name:** ${command.name}`);
    
if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
if (command.description) data.push(`**Description:** ${command.description}`);
if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

    data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
    message.reply(`you have been sent a description of \"${command.name}\".`)
    message.author.send(data, { split: true });}}





