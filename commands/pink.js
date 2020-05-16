module.exports = {
    name: 'pink',
    description: '',
    execute(message, role) {
        role.edit( {color : '#FF69B4' })
            return message.channel.send ("Role has Pink")}}

