const db = require('../models');
const User = require('../models/user.model');
const ROLES = db.ROLES;
const user = db.user;

checkDublicateUserOrEmail = (req, res, next) => {
  //Username
  User
    .findOne({
      username: req.body.username
    })
    .exec((err, user) => {
      if(err) {
        res.status(500).send({messsage: err});
        return;
      }

      if(user) {
        res.status(400).send({messsage: "Failed! Username is already in the db!"});
        return;
      }

      //Email
      User
        .findOne({
          email: req.body.email
        })
        .exec((err, user) => {
          if(err) {
            res.status(500).send({messsage: err});
            return;
          }

          if(user) {
            res.status(400).send({messsage: "Failed! Email is already in the db!"});
            return;
          }

          next();
        });
    });
}