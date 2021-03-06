require('dotenv').config();
// Import the discord.js module
const Discord = require('discord.js');
const sequelize = require('./sequelize.js');

const client = new Discord.Client({
    //to react to messages that were present before the bot logged in
    partials: ["MESSAGE"]
});

client.on('ready', () => {
    console.log('I am ready!');
});

//shows the options to choose for the user
exports.sayHi = function() {
    client.on('message', message => {
        if (message.content === 'Hi') {
            // Send "Hey" to the same channel
            message.channel.send('Hey\nChoose from the following:\n1)Set event date\n2)Get events for the day');
            //message by tagging the user to whose message the bot is replying
            //message.reply('Hey');
        }
        if(message.content === '1'){
            message.channel.send('Enter meeting name and date');        
        }
    });
}


// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.TOKEN);