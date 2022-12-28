const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.model');

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



const isAdmin = async (req, res, next) => {
        const {email} = req.user.user;
        const adminUser = await Admin.findOne({email});
        if(adminUser === null) {
            return res.status(404).send({message : 'You are not allowed to access this'});
        }
        else{
            next();
        }
    }




module.exports = {
    authMiddleware,
    isAdmin
}