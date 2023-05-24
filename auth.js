// auth.js
const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    // Check if the provided token matches a specific value (e.g., '5555-5555-5555-5555')
    if (token !== '5555-5555-5555-5555') {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // If the token is valid, proceed to the next middleware
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = authenticate;
