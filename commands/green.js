module.exports = {
    name: 'green',
    description: '',
    execute(message, Role) {
      Role.forEach(role => {
        role.setColor('#008000')});
            return message.channel.send (`${Role} is now the color green.`)}}
      
 
