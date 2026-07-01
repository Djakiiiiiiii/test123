export default function handler(req, res) {
  const jwks = {
    "keys": [
      {
        "kty": "RSA",
        "use": "sig",
        "kid": "2cbc0ff1-62ba-4b31-af99-1e5a064c5ddd",
        "alg": "RS256",
        "n": "vxiud3d1_gJWteqAaAoq9E7siPkxt4HHwk0xrrY82DhGKu0lnFLJf8RCWSmCB1q4sE9ljXcJWmyhqjzyUrQPpPG4Ih49BcDyPkBcq4BjRGAelwmgw5Ykvv0GF8ps0vD5MpsmjjwpMmhvbVc5YoOgJOS6CCMPROWdlkuSgWzDY-ZQJXu_RigAHvxaB3T3UgK4HyM5s34NJmb3LnGvBNN_LlUrLThb8hR_l2MjwTb_WtLjKJZFmxrgrM5Yk2nEhoKbHbvrwqvls6pMcGYlymuZ7cXABe2GlEcZ7_8ms6JH_TrqvMhJ2Qwff67iIyxB5iENGkU4FLDYGy8nfh5dAMRxfw",
        "e": "AQAB"
      }
    ]
  };
  
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(jwks);
}
