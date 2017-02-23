var jwt = require('jsonwebtoken');
var config = require('../config.js');

module.exports = function(req, res, next) {
    var token;

    if( req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization') ) {
        token = req.headers['authorization'];

        try {
            req.user = jwt.verify(token, config.JWT_SECRET);
        } catch(err) {
            return res.status(401).json({
                error: {
                    msg: 'Failed to authenticate token!'
                }
            });
        }
    } else {
        return res.status(401).json({
            error: {
                msg: 'No token!'
            }
        });
    }
    next();
    return;
}
