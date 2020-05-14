
    module.exports = {
        name: 'add',
        description: '',
        execute(message, args) {
        if (!args[1]){
        var role= message.member.guild.roles.cache.find(role => role.name === args[0]);
        if(!role) return message.reply(args[0] + " aint a roll");
         
        else message.member.roles.add(role);
          return message.reply ("Role be on you.")}

          if (!args[2]){
            var role= message.member.guild.roles.cache.find(role => role.name === args[0] + ' ' + args[1]);
            if(!role) return message.reply(args[0] + ' ' + args[1] + " aint a roll");
             
            else message.member.roles.add(role);
              return message.reply ("Role be on you.");}}}