// authMiddleware.js
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1]; 
    jwt.verify(token, 'secretKey', (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = { requireAuth };
