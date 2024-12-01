const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({ authStrategy: new LocalAuth() });

client.on('qr', qr => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('CLIENT IS READY');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'hello') {
        message.reply('Hello! How can I help you today?');
    } else if (message.body.toLowerCase() === 'bye') {
        message.reply('Goodbye! Have a great day!');
    } else {
        message.reply('I\'m not sure how to respond to that. Can you please try again?');
    }
});

client.initialize();