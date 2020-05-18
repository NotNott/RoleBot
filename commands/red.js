module.exports = {
    name: 'red',
    description: '',
    execute(message, Role) {
      Role.forEach(role => {
        role.setColor( '#FF0000' )});
        return message.channel.send (`${Role} is now the color red`)}}
