const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try{
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided'});
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = { _id: decoded.userId };
        next();
    } catch (error) {
        console.error('Error in authMiddleware:', error);
        res.status(500).json({ message: 'Error authenticating user', error });
    }
};