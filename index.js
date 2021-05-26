console.log("Bot coded by Felix_Playz#1000");
const express = require("express")
const app = express ()

app.get("/", (req, res) => {
  res.send("hey ya")
})

app.listen(3000, () => { 
  console.log("Project is ready")
})

//====================================================================================CONSTANTS REQUIRED ON READY=============================================================================================
const { Client, Collection } = require('discord.js');
const { PREFIX, TOKEN } = require('./config');
const bot = new Client({ disableMentions: 'everyone' });
const fs = require("fs");
const db = require('quick.db');
const emojis = require("./emojis.json");
//============================================================================================================================================================================================================


//====================================================================================COLLECTIONS REQUIRED ON READY===========================================================================================
bot.commands = new Collection();
bot.aliases = new Collection();
bot.emotes = emojis;
//============================================================================================================================================================================================================



//============================================================================================INITIALIZING====================================================================================================
["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handler/${x}`)(bot));

bot.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handler/${handler}`)(bot);
});

//============================================================================================================================================================================================================


//=========================================================================================MENTION SETTINGS===========================================================================================

bot.on('message', async message => {


    let prefix;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        
            } catch {
            prefix = PREFIX;
    };
    try {
        if (message.mentions.has(bot.user.id) && !message.content.includes("@everyone") && !message.content.includes("@here")) {
          message.channel.send(`\nMy prefix for \`${message.guild.name}\` is \`${prefix}\` Type \`${prefix}help\` for help`);
          }
          
    } catch {
        return;
    };

});


//============================================================================================================================================================================================================


bot.login(TOKEN);

//BOT CODED BY: Felix_PlaYz#1000
//DO NOT SHARE WITHOUT CREDITS!



















//BOT CODED BY: Felix_PlaYz#1000
//DO NOT SHARE WITHOUT CREDITS!





















//BOT CODED BY: Felix_PlaYz#1000
//DO NOT SHARE WITHOUT CREDITS!
