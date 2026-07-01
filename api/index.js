export default function handler(req, res) {
  const jwks = {
    "keys": [
      {
        "kty": "RSA",
        "use": "sig",
        "kid": "2cbc0ff1-62ba-4b31-af99-1e5a064c5ddd",
        "alg": "RS256",
        "n": "XXXXX...",  // GANTI DENGAN YANG BARU DARI TERMINAL
        "e": "AQAB"
      }
    ]
  };
  
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(jwks);
}
