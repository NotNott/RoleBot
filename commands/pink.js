module.exports = {
    name: 'pink',
    description: '',
    execute(message, Role) {
        Role.forEach(role =>{
            role.setColor(  '#FF69B4' )});
                return message.channel.send (`${Role} is now the color pink`)}}

