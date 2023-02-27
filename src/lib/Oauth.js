var express = require('express'),
	oauth2 = require('salesforce-oauth2');

var callbackUrl = "<your callback url>",
	consumerKey = "<your consumer key>",
	consumerSecret = "<your consumer secret>";


var logger = require('morgan');
app = express();
app.use(logger);


var authenticate = function(callback) {
    var uri = oauth2.getAuthorizationUrl({
        redirect_uri: callbackUrl,
        client_id: consumerKey,
        scope: 'api',
    });

    // Open the web browser to the authorization URL
    Linking.openURL(uri);

    // Listen for the redirect event and handle the callback URL
    Linking.addEventListener('url', function(event) {
        var uri = event.url;
        var authorizationCode = uri.match(/\?code=(.+)$/)[1];

        oauth2.authenticate({
            redirect_uri: callbackUrl,
            client_id: consumerKey,
            client_secret: consumerSecret,
            code: authorizationCode,
        }, callback);
    });
}

module.exports = {
    authenticate: authenticate
};


// app.get('/oauth/callback', function(request, response) {
// 	var authorizationCode = request.param('code');

// 	oauth2.authenticate({
// 		redirect_uri: callbackUrl,
// 		client_id: consumerKey,
// 		client_secret: consumerSecret,
// 		code: authorizationCode,
// 		// You can change loginUrl to connect to sandbox or prerelease env.
// 		//base_url: 'https://test.my.salesforce.com'
// 	}, function(error, payload) {
// 		/*

// 		The payload should contain the following fields:
		
// 		id 				A URL, representing the authenticated user,
// 						which can be used to access the Identity Service.
		
// 		issued_at		The time of token issue, represented as the 
// 						number of seconds since the Unix epoch
// 						(00:00:00 UTC on 1 January 1970).
		
// 		refresh_token	A long-lived token that may be used to obtain
// 						a fresh access token on expiry of the access 
// 						token in this response. 

// 		instance_url	Identifies the Salesforce instance to which API
// 						calls should be sent.
		
// 		access_token	The short-lived access token.


// 		The signature field will be verified automatically and can be ignored.

// 		At this point, the client application can use the access token to authorize requests 
// 		against the resource server (the Force.com instance specified by the instance URL) 
// 		via the REST APIs, providing the access token as an HTTP header in 
// 		each request:

// 		Authorization: OAuth 00D50000000IZ3Z!AQ0AQDpEDKYsn7ioKug2aSmgCjgrPjG...
// 		*/
// 	});	
// });

