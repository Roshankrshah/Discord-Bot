const { Client, GatewayIntentBits } =  require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate',message => {
    console.log(message.content);
});

client.login(
    "MTE1Mjg0NTUzNjc5NDI2NzcwMA.G0eIuU.Aee7oPwChsCJclAdoflPMYb8ss1jeRKaYOwixM"
);