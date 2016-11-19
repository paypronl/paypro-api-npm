paypro = require('paypro-api');
api_key = 'YOUR_API_KEY';
command = 'list';
params = {'list_type': 'sales'};
success = function(response) { console.log('Success! ' + response) };
error = function(error) { console.log('Error! ' + error) };

paypro(api_key, command, params, success, error);