var locomotive = require('locomotive'), 
	couchdb = require('node-couchdb'),
	Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Locomotive';

  var couch = new couchdb("localhost", 5984);  

	couch.get("gridlocked", "82a2c", function (err, resData) {
	    if (err)
	        return console.error(err);
	 
	    console.dir(resData.data._id);
	});  

  this.render();
}

module.exports = pagesController;
