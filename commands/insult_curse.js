module.exports = {
    name: 'curse',
    description: "Curses!",
    execute(message, args){
        message.channel.send('Pong!');
    }
};