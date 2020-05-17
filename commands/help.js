module.exports = {
	name: 'help',
	description: '',
    execute(message){
        const fs = require('fs');
        var helpList = fs.readFileSync('./Helplist.txt', 'utf-8');
        return message.channel.send (helpList);}}