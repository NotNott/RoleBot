module.exports = {
    name: 'remove',
    description: 'Removes a role from your own list of roles',
    usage: '!remove @role',
    aliases:  ['r', 'off'],
    execute(message, Role) {
      message.member.roles.remove(Role);
        return message.reply (`${Role} is no longer one of your roles.`)}}