/**
 * Created by ejdy on 18.6.18.
 */
const rp = require(request - promise); // https://github.com/request/request-promise

const options = {
    method: 'POST',
    uri: 'http://api.messageok.com/v1',
    headers: {
        api-key: 'XXXYYYZZZ'
    }
    body: {
        body: 'MessageOK API Test',
        to: [
            {
                phone_number: '420606999999'
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