require("dotenv").config();
const Discord = require('discord.js')
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})
client.login(process.env.TOKEN)
client.on("messageCreate", function (message) {
    const prefix = "lol.";
    if (message.author.bot) return
    const commandBody = message.content.slice(prefix.length)
    const args = commandBody.split(' ')
    const command = args.shift().toLowerCase()
    const help = "Welcome to lolbot\nAvailable commands:\nlol.ping: returns the amount of time it took to send a " +
        "message\n" + "lol.joke: you'll see\nlol.rick: rickroll someone XD"
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
    if (command === "help" && message.content.startsWith(prefix)) {
        message.reply(help)
    }
    /*if (message.author.id === "654782443475435550") {
        message.reply("hi omar")
    }
     */
    if (message.content.includes("your")) {
        message.reply("*you're")
    }
    if (message.mentions.has("883797094857597020")) {
        message.reply(help)
    }
})