module.exports = {
    name: 'permission',
    description: 'Gives the role the ability to manage other roles',
    usage: '!permission @role',
    aliases: ['p', 'perm', 'perms'],
    execute(message, Role) {
        Role.forEach(role =>{
            role.setPermissions(["MANAGE_ROLES"])});
            return message.channel.send (`${Role} has permission to edit roles`)}}
              
              
                
                
                
                  