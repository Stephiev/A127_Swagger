var request = require("request");

module.exports = {
  getHotels: getHotels
}

function getHotels (req, res) {
  var apikey = 'xsNVY1PLYpaiW9G1A3m8BNI03GgdIpK5'
  var location = req.swagger.params.location.value;
  var options = {
    'url': 'http://terminal2.expedia.com:80/x/hotels?maxhotels=10&radius=5mi&location=' + location,
    'headers': {
      'Authorization': 'expedia-apikey key=' + apikey
    }
// need to send an authoroixaion in header.
// x is usally the verison but we're passing the most recent
// give us a max od 10, and radius within 5 miles and location is the
// location coming in from the endpoint.

  }
  request(options, function (error, response, body) {
    if (error) {
      res.send(error);
    } else {
      res.json(JSON.parse(body));
    }
  })
}
