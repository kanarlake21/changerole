const Discord = require("discord.js");
var bot = new Discord.Client();
bot.login("token");
var prefix = ("*");

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "general").send('Bienvenue ${member}')
    })

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "general").send('${member} vient de quitter')
    })

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
    })
