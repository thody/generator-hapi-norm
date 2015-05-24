// Declare routes
exports.routes = [];

exports.routes.push({
  method: 'GET',
  path: '/',
  handler: function (req, res) {

    res({ message: 'Hello world!' });

  }
});
