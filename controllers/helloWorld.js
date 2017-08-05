module.exports = function(router) {
    router.get('/hello-world', function(req, res) {
        res.json({data: 'Hello World!'});
    });

    return router;
};
