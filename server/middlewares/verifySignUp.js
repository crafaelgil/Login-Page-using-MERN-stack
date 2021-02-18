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

checkRolesExisted = (req, res, next) => {
  if(req.body.roles) {
    for (let i = 0; i < req.body.length; i++) {
      if(!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          messsage: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
}

const verifySignUp = {
  checkDublicateUserOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;