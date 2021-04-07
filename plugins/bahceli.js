const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Asena = require('../events');
const Config = require('../config');
const fs = require('fs');

Asena.addCommand({pattern: 'bahceli', fromMe: true}, (async (message, match) => { 

    await message.client.sendMessage(message.jid, fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/bahceli.mp4"),MessageType.video, { mimetype: Mimetype.mpeg})

}));
