module.exports = {
    name: 'yellow',
    description: '',
    execute(message, role) {
      role.edit( {color : '#FFFF00' })
        return message.channel.send ("Role has yellow")}}
      