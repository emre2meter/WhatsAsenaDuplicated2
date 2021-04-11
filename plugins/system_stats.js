const Asena = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, dontAddCommandList: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid, fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/VID-20210401-WA0044.mp4"),MessageType.video, { mimetype: Mimetype.mp4, caption: '```WhatsAsena Founder 〆𝐘𝐈𝐊𝐈𝐊〆¹⁹³ İçin Çalışıyor```\n\n```Version:``` v31.0\n```Branch:``` *Owner*\n\n\n_Delinse yer,çökse gök,yansa,kül olsa dört yan,_\n_Yüce dileğe doğru yine yürürüz yayan._\n_Yıldırımdan,tipiden,kasırgadan yılmayan,_\n_Ölümlerle eğlenen tunç yürekli Türkleriz.._'})
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by WhatsAsena*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, dontAddCommandList: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```Tanrı Türk\'ü Korusun. 🐺 Asena Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/AsenaSupport\n*Telegram Channel:* https://t.me/asenaremaster' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by WhatsAsena*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
