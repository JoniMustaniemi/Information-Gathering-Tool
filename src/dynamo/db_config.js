var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'eu-west-2_r6XKQ2dZV'});
var myConfig = new AWS.Config({
  credentials: myCredentials,
  region: 'us-west-2'
});

export default myConfig;