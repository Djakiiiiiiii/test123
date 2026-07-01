export default function handler(req, res) {
  const jwks = {
    "keys": [
      {
        "kty": "RSA",
        "use": "sig",
        "kid": "2cbc0ff1-62ba-4b31-af99-1e5a064c5ddd",
        "alg": "RS256",
        "n": "2yClzeAQsJ92igvwwQH0r8UxXUd45IX4sbbLKF9bmTeW7iKXdV16vM8wJFEkuP9XS4GOj4CBJFiD4EMYvxfa9DL4AMeS3XWkwvVBoPl8-zC40Gk-MmafbE9xikLgptHxZzxQAZe6jyUjqa0hxx--lTkS2T0ewhNGNdzubPnego0OppjVZCCjrxyqYWX0onWTOFUdZ6g-Sx7oL21BA8znDh7BDU8hPnoV2PP6LWir8x_1CNCjftjXXrA5V-PN1R0zZ3ouBnEjilLSsmhHc2TbhJl3OYAxZNk7t2O_bvBuiA7niNBnGL-sy_ZO9f2hYFsb7Ivyy3Xgb0FjqUq9UrBwHQ",
        "e": "AQAB"
      }
    ]
  };
  
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(jwks);
}
