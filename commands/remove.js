module.exports = {
    name: 'remove',
    description: '',
    execute(message, role) {
      message.member.roles.remove(role);
        return message.reply ("Role be gone from you.")}}