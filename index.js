const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log(`RX SYSTEM Online: ${client.user.tag}`);
});

// أمر تجريبي
client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content === "!help") {
        const embed = new EmbedBuilder()
            .setTitle("RX SYSTEM")
            .setDescription("البوت شغال 👍")
            .setColor("Blue");

        message.reply({ embeds: [embed] });
    }
});

client.login(process.env.TOKEN);