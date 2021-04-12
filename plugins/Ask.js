const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'ask', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*S*');
    await message.sendMessage('*Se*');
    await message.sendMessage('*Sen*');
    await message.sendMessage('😍 *Seni* 😍');
    
    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*Ç*');
    await message.sendMessage('*Ço*');
    await message.sendMessage('*Çoo*');
    await message.sendMessage('🥰 *Çook* 🥰');
    
    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*S*');
    await message.sendMessage('*Se*');
    await message.sendMessage('*Sev*');
    await message.sendMessage('*Sevi*');
    await message.sendMessage('*Seviy*');
    await message.sendMessage('*Seviyo*');
    await message.sendMessage('*Seviyor*');
    await message.sendMessage('*Seviyoru*');
    await message.sendMessage('💞 *Seviyorum* 💗');
    
    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('Seni ♥️ Seviyorum');

}));

Asena.addCommand({pattern: 'infoask', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by @emre2metre*\n*Seni seviyorum demenin güzel bir hali.*\n💻Usage: *.ask*")

}));
