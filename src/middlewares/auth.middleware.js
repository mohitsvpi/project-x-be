const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try {
        let token;
        if(req?.headers?.authorization?.startsWith('Bearer ')) {
            token = req.headers.authorization.split(" ")[1];
            if(token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
                req.user = decoded;
                next();
            }
            else{
                return res.status(500).send({message : "No authorization token found"});
            }
        }
        else{
            return res.status(500).send({message : "No authorization token found"});
        }
    } catch (error) {
        return res.status(500).send({message : "Authorization token is expired. Please login again"});
    }
}

module.exports = {
    authMiddleware
}