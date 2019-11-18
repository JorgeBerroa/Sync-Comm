const express = require('express');
const router = express.Router();
require('dotenv').config();
const twilio = require('twilio');
const Parser = require('../Utils/parser');
const twilioClient = twilio(process.env.TWILIO_ACCOUNTSID, process.env.TWILIO_AUTH_TOKEN);
const {VoiceResponse, MessagingResponse} = twilio.twiml;

router.all('/voiceCode', (req, res) => {
    const response = new VoiceResponse();
    const gather = response.gather({
        input: 'speech',
        action: '/completed'
    });
    gather.say('Hi');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(response.toString());
});

router.all('/completed', (req, res) => {
    const {SpeechResult} = req.body;
    console.log(SpeechResult);
    const codes = Parser.getGoogleCode(SpeechResult);
    if (codes.length) {
        console.log(`Your google code ${codes > 1 ? "are" : "is"}: ${codes}`);
    }
    res.status(200).send("ok");
});

module.exports = router;
