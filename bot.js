const Discord = require("discord.js"),
	  scred = require("./config.json"),
	  prefix = scred.prefix,
	  request = require("request"),
	  lRole = require("./roles.json"),
	  nsfFile = require("./data.json"),
	  me = new Discord.Client();
var roleDemander = "none";

me.on("ready", () => {
      console.log(`Logged in as ${me.user.tag}!`);
	    me.user.setStatus("online"); //dnd , online , ldle
      
      if (msg.content.startsWith(prefix + "roles") || msg.content.startsWith(prefix + "role") || msg.content.startsWith(prefix + "rôles") || msg.content.startsWith(prefix + "rôle")) {
              var args = msg.content.split(' ');
              if (!args[1] || args[1] === "liste" || args[1] === "list") {
                      var role = "__Liste des **roles**:__ ```";
                      for (var i = 0; i < msg.guild.roles.keyArray().length; i++) {
                              if (msg.guild.roles.find("id", msg.guild.roles.keyArray()[i]).name.toLowerCase().includes("player")) {
                                      role = role + "\n" + msg.guild.roles.find("id", msg.guild.roles.keyArray()[i]).name + "  ==> ID: " + msg.guild.roles.find("id", msg.guild.roles.keyArray()[i]).id;
                              }
                      }
                      msg.channel.send(role+"``` pour s'ajouter un role: ``"+prefix+"roles add/ajouter <ID du role>\n``\n _(Concernant les autres grades, contactez le staff.)_");
              }
              console.log(args[1]);
              if (args[1] === "add" || args[1] === "ajouté") {
                      if (args[2]) {
                              console.log(args[2]);
                              if (!msg.guild.roles.get(args[2])) {
                                      msg.reply("je m'excuse mais je n'ai pas trouver le grade que tu demandes avec cet ID: " + args[2] + " .N'hésite pas regarder la liste avec la commande: ``"+prefix+"roles liste``.")
                              }
                              else {
                                      if (msg.guild.roles.get(args[2]).name.includes("Player")) {
                                              msg.member.addRole(msg.guild.roles.get(args[2]));
                                              msg.reply("J'ai enfin réussi a t'ajouter le grade " + msg.guild.roles.get(args[2]).name + ". Bon jeu !");
                                      } else {
                                              msg.reply("petit malin... c'est raté...");
                                      }
                              }
                      }
              }
              if (args[1] === "remove" || args[1] === "retiré") {
                      if (args[2]) {
                              console.log(args[2]);
                              if (!msg.guild.roles.get(args[2])) {
                                      msg.reply("Je m'excuse mais je n'ai pas trouver le grade que tu demandes avec cet ID: " + args[2] + " .N'hésite pas regarder la liste avec la commande: ``"+prefix+"roles liste``.")
                              }
                              else {
                                      if (msg.guild.roles.get(args[2]).name.includes("Player")) {
                                              msg.member.removeRole(msg.guild.roles.get(args[2]));
                                              msg.reply("Je viens de te retirer le grade " + msg.guild.roles.get(args[2]).name + ".");
                                      } else {
                                              msg.reply("petit malin... c'est raté...");
                                      }
                              }
                      }
              }
              log(msg, msg.author.username);
      }
});
