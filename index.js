const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    else {
        message.reply({
            content: 'Hi From Bot'
        })
    }
});

client.login(
    "MTE1Mjg0NTUzNjc5NDI2NzcwMA.G0eIuU.Aee7oPwChsCJclAdoflPMYb8ss1jeRKaYOwixM"
);