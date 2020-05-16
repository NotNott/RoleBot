module.exports = {
    name: 'blue',
    description: '',
    execute(message, role) {
      role.edit( {color : '#0000ff'})
        return message.channel.send ("Role has blue")}}
      

   
