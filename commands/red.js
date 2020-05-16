module.exports = {
    name: 'red',
    description: '',
    execute(message, role) {
      role.edit( {color : '#FF0000' })
        return message.channel.send ("Role has red")}}
