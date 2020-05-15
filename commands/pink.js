module.exports = {
    name: 'pink',
    description: '',
    execute(message, args) {
    if (!args[1]){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
        
        else role.edit( {color : '#FF69B4' })
          return message.reply ("Role has Hot Pink")}

        if (!args[2]){
            var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
            if(!role) return message.reply(args[0] + ' ' + args[1] + " aint a roll");
            
        else role.edit( {color : '##FF69B4' })
            return message.reply ("Role has Hot Pink")

        }}};