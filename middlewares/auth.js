var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    var token = req.headers['authorization'];

    if( token ) {
        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
            if( err ) {
                return res.status(401).json({
                    error: {
                        msg: 'Failed to authenticate token!'
                    }
                });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            error: {
                msg: 'No token!'
            }
        });
    }
}
