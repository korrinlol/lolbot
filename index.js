require("dotenv").config();
const Discord = require('discord.js')
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})
const token = process.env['TOKEN']
client.login(token)
client.on("messageCreate", function (message) {
    const prefix = "lol.";
    if (message.author.bot) return
    const commandBody = message.content.slice(prefix.length)
    const args = commandBody.split(' ')
    const command = args.shift().toLowerCase()
    const help = "Welcome to lolbot\nAvailable commands:\nlol.ping: returns the amount of time it took to send a " +
        "message\n" + "lol.joke: you'll see\nlol.rick: rickroll someone XD\n" + "doom shareware: gives you the doomshare :thumbsup:\n"
    if (command === "ping" && message.content.startsWith(prefix)) {
        const timeTaken = Date.now() - message.createdTimestamp
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`)
    }
    if (command === "joke" && message.content.startsWith(prefix)) {
        message.channel.send("the gcc")
    }
    if (command === "rick" && message.content.startsWith(prefix)) {
        message.channel.send
        ("https://tenor.com/view/rickroll-roll-rick-never-gonna-give-you-up-never-gonna-gif-22954713")
    }
    if (command === "deez" && message.content.startsWith(prefix)) {
        message.channel.send("nuts")
    }
    if (command === "doom shareware" && message.content.startsWith(prefix)) {
        message.channel.send("http://www.doomworld.com/3ddownloads/ports/shareware_doom_iwad.zip")
    }
    if (command === "help" && message.content.startsWith(prefix)) {
        message.reply(help)
    }
    /*if (message.author.id === "654782443475435550") {
        message.reply("hi omar")
    }
     */
    if (message.content.includes("*you're") || message.content.includes("*your")) {
        message.reply("nobody cares!")
    }
})