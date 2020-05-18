module.exports = {
    name: 'blue',
    description: 'Adds a blue color to the role.',
    usage: '!blue @role',
    aliases: ['b'],
    execute(message, Role) {
      Role.forEach(role => {
        role.setColor( '#0000ff');})
        return message.channel.send (`${Role} is now the color blue`)}}
      

   
