var mongoose = require('mongoose');
User = mongoose.model('User');

exports.authenticate = function(req, res) {
  passport.authenticate('userapp', { failureRedirect: '/login' }),
      function(req, res) {
          res.redirect('/');
  };
};
exports.addAccount = function(req, res) {
  if (req.body.username &&
  req.body.password && req.body.accessLevel) {
  var userData = {
    username: req.body.username,
    password: req.body.password,
    accessLevel: req.body.accessLevel,
    _id: req.body.id
  }
  //use schema.create to insert data into the db
  User.create(userData, function (err, user) {
    if (err) {
      return next(err)
    } else {
      return res.redirect('/doctor');
    }
  });
}
};
