const express = require('express');
const router = express.Router();

const maria = require('../../maria');

//join으로 get 접속하면 views/sign/join.pug rendering
router.get('/', function(req, res, next) {
    res.render('sign/join');
});

//join으로 post 접속 시
router.post('/', function(req, res, next) {
    const user = require('../../model/user/addUser')(req.body);
    const sql = `INSERT INTO testuser (userid, password, name, salt) values ("${user.userid}", "${user.password}", "${user.name}", "${user.salt}")`;
    maria.query(sql, function(err, rows) {
        console.log(rows);
        if(!err) {
            res.send("1");
        } else {
            res.send("0");
        }
    })
});

module.exports = router;