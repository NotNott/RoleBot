module.exports = {
    name: 'green',
    description: 'Adds a green color to the role.',
    usage: '!green @role',
    aliases: ['g', 'gr'],
    execute(message, Role) {
      Role.forEach(role => {
        role.setColor('#008000')});
            return message.channel.send (`${Role} is now the color green.`)}}
      
 
