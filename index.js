export default function handler(req, res) {
  const jwks = {
    "keys": [
      {
        "kty": "RSA",
        "use": "sig",
        "kid": "2cbc0ff1-62ba-4b31-af99-1e5a064c5ddd",
        "alg": "RS256",
        "n": "06kKwrqtiZjKw3J0ZwIr_s3gfKia9iPttLR7MhdCXold9R72tyBT4OLNQxxIup5uDSR0Q8wx_FJvtRqfjC8mz4yKroYquaYwuE9SucTY-nGAu2wYd_kBC-iRPXqhuBmoc5OW35QssUNicrQyHpwAGbx6jqGx_ssyXHCbTaqiFAw-5aivLW4RR8L2CGw8MHR2LdhoARNZubLvavZNVQS_O6jdZtIHykTnrTff-mRQOzP3mn7rSTLHhsMbHPBcN2jW2RQoD6ifF7W5WFjwYDcibQMakPvJFXbneTGUfvgIvpXAjHzSRNiJaXnsLt2i8hagVxz6qb0AKskrJxHJL4bSVQ",
        "e": "AQAB"
      }
    ]
  };
  
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(jwks);
}
