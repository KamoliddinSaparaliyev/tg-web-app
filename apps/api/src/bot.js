const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    if (msg.text === '/start') {
        bot.sendMessage(chatId, 'Hello, How can I help you?', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Get Started',
                            web_app: { url: 'https://www.google.com' },
                        },
                    ],
                ],
            },
        });
    }
});

module.exports = bot;
