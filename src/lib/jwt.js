import jwt from 'jwt-decode';
import forge from 'node-forge';
import { AuthSession } from 'expo';

const jwtSigningOptions = {
  header: {
    alg: 'RS256',
    typ: 'JWT',
  },
  exp: Math.floor(Date.now() / 1000) + 300,
  iss: 'YOUR_CONSUMER_KEY',
  sub: 'YOUR_USERNAME',
};

const getJwt = (privateKey) => {
  const jwtClaim = { ...jwtSigningOptions };

  const jwtHeader = { alg: 'RS256', typ: 'JWT' };

  const privateKeyForge = forge.pki.privateKeyFromPem(privateKey);

  const jwt = forge.jwt.sign(
    {
      header: jwtHeader,
      payload: jwtClaim,
      secret: privateKeyForge,
    },
    { algorithm: 'RS256' },
  );

  return jwt;
};

const loginToSalesforce = async (jwt) => {
  const url =
    'https://login.salesforce.com/services/oauth2/token?' +
    'grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer' +
    `&assertion=${jwt}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const json = await response.json();

  return json;
};

const authenticateWithSalesforce = async () => {
  try {
    const privateKey = 'YOUR_PRIVATE_KEY';
    const jwt = getJwt(privateKey);
    const response = await loginToSalesforce(jwt);
    // Save the access token for future requests
    const accessToken = response.access_token;
  } catch (error) {
    console.log(error);
  }
};
