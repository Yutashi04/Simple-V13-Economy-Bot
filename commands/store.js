const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('m!'))return;  


    let embed = new MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [m!buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [m!buy nikes]\nCar: 800 [m!buy car]\nMansion: 1200 [m!buy mansion]")
    .setColor("#FFFFFF")
    message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
}

module.exports.help = {
  name:"store",
  aliases: ["st"]
}