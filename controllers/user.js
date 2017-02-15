module.exports = function(router) {
    router.post('/login', function(req, res) {
        if( req.body.username === 'admin' && req.body.password === 'admin' ) {

        }
    });

    return router;
}
