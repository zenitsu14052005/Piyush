require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('1094803873639710771')
        .setType('STREAMING')
        .setURL(`https://www.youtube.com/shorts/yECCVxxh7vE`)
        .setDetails(`Hakai..!!`)
        .setName(`Hakai..!!`)
        .setState(`Sorry Bro, your luck has run out….. Hakai!!`)
        .setParty({
            max: 5,
            current: 4,
            id: Discord.getUUID(),
        })
.setAssetsLargeImage(`mp:attachments/1115220304629874720/1175873012969513080/download.gif?ex=656cd014&is=655a5b14&hm=a04ab8bf9fff7c2eb85938d8594dd1afe4e78a632b779915a0ec31553b5172c8&`)
         
        .setAssetsLargeText(`Hakai!!`)
        .addButton(`BRUTAL BEERUS`, `https://discord.gg/C6TWAAWAU9`)
        .addButton(`ZENITSU</3`, `https://discord.gg/zenni-realm`)
          client.user.setActivity(rpc.toJSON());

          console.log(`${client.user.tag} is ready!`);
});

      //Account Token
      client.login(mySecret = process.env['token'])