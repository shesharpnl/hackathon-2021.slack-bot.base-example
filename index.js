require('dotenv').config();
const SlackBot = require('slackbots');
const phrases = require('./phrases.json');

const BOT_TOKEN = process.env.BOT_TOKEN;

const getRandomIndexFromArray = (array) => {
    return Math.floor( Math.random() * phrases.positive.length );
}

const bot = new SlackBot({
    json_file_store: './db_slackbutton_slash_command/',
    token: BOT_TOKEN,
    name: 'Slack bot'
});

const selectedPhrase = phrases.positive[getRandomIndexFromArray(phrases.positive)];

bot.on('start', () => {
    bot.postMessageToChannel('general', selectedPhrase, {icon_emoji: ':robot_face:'})
});