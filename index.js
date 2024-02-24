const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log('Server Online because of Axo Coder ✅!!');
});
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
.setAssetsLargeImage(`mp:attachments/1115220304629874720/1210821385090498681/a_265266cd68dfe739e0fbba183f3728fa.gif?ex=65ebf44a&is=65d97f4a&hm=ec8d0cd48d4ef1d6cbeb875385e96e0b02304761c2cfea056ec69c811ac4b6fe&`)
         
        .setAssetsLargeText(`Hakai!!`)
        .addButton(`BRUTAL BEERUS`, `https://discord.gg/C6TWAAWAU9`)
        .addButton(`ZENITSU</3`, `https://discord.gg/zenni-realm`)
          client.user.setActivity(rpc.toJSON());

          console.log(`${client.user.tag} is ready!`);
});

      //Account Token
      client.login(mySecret = process.env['token'])
