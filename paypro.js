module.exports = function(api_key, command, params, success, error) {
  var request = require('request');

  var options = {
    url: 'https://www.paypro.nl/post_api/',
    method: 'POST',
    form: {'apikey': api_key, 'command': command, 'params': JSON.stringify(params)}
  }

  request(options, function (request_error, response, body) {
    errors_found = JSON.parse(response['body'])['errors'];
    response_text = JSON.parse(response['body'])['return'];

    if (response_text == 'API key not valid' || errors_found == 'true') {
      error(response_text);
    }
    else if (!request_error && response.statusCode == 200) {
      success(response_text);
    }
    else {
      error(request_error);
    }
  })
};