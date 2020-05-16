module.exports = {
    name: 'perm',
    description: '',
    execute(message, role) {
     role.setPermissions(["MANAGE_ROLES"]);
      return message.channel.send ("Role has permission")}}
              
              
                
                
                
                  