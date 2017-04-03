
var Route = App.router;

Route.get('/', function(req, res){
    res.view('page1', { title: 'Quorra' });
});

Route.get('/page1', function(req, res){
    res.view('page1', { title: 'Quorra' });
});

Route.get('/page2', function(req, res){
    res.view('page2', { title: 'Quorra' });
});

Route.get('/page3', function(req, res){
    res.view('page3', { title: 'Quorra' });
});

Route.get('/page4', function(req, res){
    res.view('page4', { title: 'Quorra' });
});

Route.controller('users', 'HomeController');