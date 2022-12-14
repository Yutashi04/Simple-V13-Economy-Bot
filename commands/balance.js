const {MessageEmbed} = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
  if(!message.content.startsWith('m!'))return;  

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  const moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Balance**\n\nPocket: ${bal}\nBank: ${bank}`);
  message.reply({embeds: [moneyEmbed], allowedMentions: {repliedUser: false}})
};

module.exports.help = {
  name:"balance",
  aliases: ["bal"]
}