
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 7777);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(require('stylus').middleware(__dirname, '/node_modules/embittered'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname, 'node_modules/embittered'));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/about', routes.about);
app.get('/aluno', routes.aluno);
app.get('*', function(req,res){
  res.render('index', { title: 'Error 404' } ); 
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Bitters is listening on port ' + app.get('port'));
});
