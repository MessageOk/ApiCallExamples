/**
 * Created by ejdy on 18.6.18.
 */
const rp = require('request-promise'); // https://github.com/request/request-promise

const options = {
    method: 'POST',
    uri: 'http://api.messageok.com/v1',
    headers: {
        'x-api-key': 'XXXYYYZZZ'
    },
    body: {
        body: "MessageOK API Test - multiple number",
        flow: [
            {sms:
                {gateway: "test"}
            }],
        to: [
            {
                phone_number: "777884070"
            },
            {
                phone_number: "606310239"
            },
            {
                phone_number: "723857485"
            }
        ]
    },
    json: true // Automatically stringifies the body to JSON

};


rp(options)
    .then((parsedBody) => {
        // POST succeeded...
        console.log(parsedBody);
    })
    .catch((err) => {
        // POST failed...
        console.log(err);
    });