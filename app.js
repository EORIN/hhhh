const express = require('express');
const path = require('path');
const app = express();
const botWolf = require('./bin/botWolf')

app.use(express.static(__dirname))
app.set('view engine', 'ejs');

const TelegramBot = require('node-telegram-bot-api');

const token = '5753321163:AAGCm5h5s1jU5noXfElnfte1JQmJvVbmads';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
        "reply_markup": {
            "keyboard": [["GetABase", "SayABase"], ["Game"], ["I'm robot"]]
        }
    });

});

bot.on('message', (msg) => {
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    }
    var base = "GetABase";
    if (msg.text.indexOf(base) === 0) {
        bot.sendMessage(msg.chat.id, `"${botWolf.getBase()}"© Alina Minlikaeva`);
    }
    var game = "Game";
    if (msg.text.indexOf(game) === 0) {
        bot.sendGame(msg.chat.id, 'Egorkarpg');
    }
});
app.listen(3000)


