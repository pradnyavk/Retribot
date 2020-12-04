'use strict';



//Import all the .env variables in the process.env
require('dotenv').config();
// Import the discord.js module
const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client({
  //to react to messages that were present before the bot logged in
  partials:["MESSAGE"]
});

//constants for giving the bot commands
const BOT_PREFIX="!";
const MOD_ME_COMMAND = "mod-me";

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

 //shout "DON'T DELETE MESSAGES" if a user deletes any message
client.on("messageDelete",message =>{
   message.channel.send("DON'T DELETE MESSAGES");
})

// Create an event listener for messages
client.on('message', message => {
 //React to the message "I love Simple-Tech" with a heart emoji
  if(message.content === 'I love Simple-Tech'){
    message.react('❤️');
  }

  //make any member a moderator 
  if(message.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`){
    modUser(message.member);
  }

   // If the message is "Hi"
  if (message.content === 'Hi') {
    // Send "Hey" to the same channel
    message.channel.send('Hey');
    //message by tagging the user to whose message the bot is replying
    //message.reply('Hey');
  }
});

//function to add member as a moderator
function modUser(member){
  member.roles.add('784310582694117406');
}

// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.TOKEN);