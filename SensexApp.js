var express=require("express");
var app=express();
var mongoose=require("mongoose");
var port = process.env.PORT || 9000;

///////////////////////////////////////////////////////////////////////
////////////Mongoose Connection///////////////////////////////////////

var mongodbUri = 'mongodb://localhost/SensexApp';
//var mongodbUri = 'mongodb://nanda:nanda23311@ds135983.mlab.com:35983/funapp';


mongoose.connect(mongodbUri,options);
var conn = mongoose.connection;

var options = {
	server: {
		socketOptions: {
			keepAlive: 300000
		}
	}
};

conn.on('disconnected', function() {
	console.log('MongoDB disconnected!', moment().format('YYYY-MM-DD hh:mm'));
	setTimeout(function(){
		mongoose.connect(mongodbUri);
	}, 3000);
});

conn.on('error', function(error) {
	console.error('Error in MongoDB connection: ' + error);
	mongoose.disconnect();
});

conn.on('connected', function(){
	console.log('connected with MongoDB');
});

conn.once('open', function() {
	// Wait for the database connection to establish, then start the app.
});

var bodyParser=require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));


///////////////////////////////////////////////////////////////////////
////////////Mongoose Connection///////////////////////////////////////


require("./Server/routes.js")(app);
app.listen(port);
console.log('App is listening on port: ' + port);
console.log('http://localhost:' + port);

process.on('uncaughtException', function (err) {
	console.log(err);
	console.error((new Date()).toUTCString() + ' uncaughtException:', err.message);
	console.error(err.stack);
	//process.exit(1)
});
