module.exports = {
    name: 'perm',
    description: '',
    aliases: ['p', 'permission', 'perms'],
    execute(message, Role) {
        Role.forEach(role =>{
            Brole.setPermissions(["MANAGE_ROLES"])});
            return message.channel.send (`${Role} has permission to edit roles`)}}
              
              
                
                
                
                  