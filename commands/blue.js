module.exports = {
    name: 'blue',
    description: '',
    execute(message, Role) {
      Role.forEach(role => {
        role.setColor( '#0000ff');})
        return message.channel.send (`${Role} is now the color blue`)}}
      

   
