let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
let contactController = require('../controllers/contact');
let loginController = require('../controllers/login');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* POST contact-form page */
router.post('/contact-form', contactController.processContactForm);

/* GET login page. */
router.get('/login', indexController.displayLoginPage);

/* POST login page. */
router.post('/login', indexController.processLoginPage);

/* GET register page. */
router.get('/register', indexController.displayRegisterPage);

/* POST register page. */
router.post('/register', indexController.processRegisterPage);

/* GET logout page. */
router.get('/logout', indexController.performLogout);

module.exports = router;
