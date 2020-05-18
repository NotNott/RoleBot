module.exports = {
    name: 'remove',
    description: '',
    aliases:  ['r', 'off'],
    execute(message, Role) {
      message.member.roles.remove(Role);
        return message.reply (`${Role}`+' is no longer one of your roles.')}}