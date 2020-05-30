const request = require('request');
 
_EXTERNAL_URL = 'https://api.sauda.co/suvidha/allCompletedOffers?apiKey=ORfbGjdg9IK4rC5IRmG48kptPkuQb5af';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}


module.exports.callApi = callExternalApiUsingRequest;