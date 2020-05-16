module.exports = {
    name: 'green',
    description: '',
    execute(message, role) {
      role.edit( {color : '#008000' })
        return message.channel.send ("Role has green")}}
 
