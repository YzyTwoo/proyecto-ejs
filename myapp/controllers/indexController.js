let indexController = {

    home : function(req, res, next) {
        res.render('index', { title: 'Express' });
    }
    
};

module.exports = indexController;