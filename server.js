const request = require("request");
const express = require("express");
const config = require("./config.js")

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const senderid = config.senderid;
const apitoken = config.apitoken;

function sendsms(smsnum, smsbody, cb) {

    //console.log(smsnum, smsbody)
    var options = {
        method: 'POST',
        url: 'https://api.mailjet.com/v4/sms-send',
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + apitoken
        },
        body: {
            Text: smsbody,
            To: smsnum,
            From: senderid
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        //console.log(body);
        cb(body);
    });

}

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//sendsms("8709776795")
app.use('/assets', express.static(__dirname + '/assets'));

app.post('/send', function (req, res) {
    //console.log(req.body)
    var mnumber = req.body.mnumber;
    var message = req.body.message;

    sendsms(mnumber, message, function (sendres) {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(sendres)
    })

});

app.listen(3000, (err) => {
    if (err) throw err
    console.log('Server running in http://127.0.0.1:3000')
})