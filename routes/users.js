var express = require('express');
var router = express.Router();
const ControllerUser = require('../controllers/users/ControllerUser');
// http://localhost:9999/users

/**
 * Register
 * method: POST
 * body: name, email, password
 * url: http://localhost:9999/users/register
 * respsonse: true/false
 */
router.post('/register', async (req, res) => {
  const { name, email, password} = req.body;
  try {
    let result = await ControllerUser.register(name, email, password);
   return res.status(200).json({ status: true, data: result});
  } catch (error) {
    return res.status(500).json({status: false, data: error.message});
  }
});

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let result = await ControllerUser.login(email, password); // Sử dụng hàm login
    return res.status(200).json({ status: true, data: result });
  } catch (error) {
    return res.status(500).json({ status: false, data: error.message });
  }
});

module.exports = router;
