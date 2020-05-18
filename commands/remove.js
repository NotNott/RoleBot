module.exports = {
    name: 'remove',
    description: '',
    execute(message, Role) {
      message.member.roles.remove(Role);
        return message.reply ("Role be gone from you.")}}