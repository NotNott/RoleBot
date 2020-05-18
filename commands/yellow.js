module.exports = {
    name: 'yellow',
    description: '',
    execute(message, Role) {
      Role.forEach(role => {
        role.setColor('#FFFF00')});
        return message.channel.send (`${Role} is now the color yellow`)}}
      