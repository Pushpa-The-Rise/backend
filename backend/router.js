//routes.js

const { registerUser } = require('./Routes/UserController');

//initialize express router
let router = require('express').Router();
//set default API response
router.get('/', function(req, res,next) {
    registerUser(res,res,next)
});
//Export API routes
module.exports = router;