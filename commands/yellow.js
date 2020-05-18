module.exports = {
    name: 'yellow',
    description: 'Gives a yellow color to the role',
    usage: '!yellow @role',
    aliases: ['y', 'yel'],
    execute(message, Role) {
      Role.forEach(role => {
        role.setColor('#FFFF00')});
        return message.channel.send (`${Role} is now the color yellow`)}}
      