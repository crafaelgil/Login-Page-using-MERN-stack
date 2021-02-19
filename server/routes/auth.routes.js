const { verifySignUp } = require('../middlewares');
const controller = require('../controllers/auth.controller');

module.exports = function(app) {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-type, Accepts"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDublicateUserOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
}