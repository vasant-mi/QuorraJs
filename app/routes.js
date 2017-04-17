
var Route = App.router;
let HomeController = require('./controllers/HomeController')
let TableController = require('./controllers/TableController')
let EditTableController = require('./controllers/EditTableController')

Route.get('/',{
   uses: HomeController.DemoIndex
});

Route.get('/table',{
    as : 'table',
    uses: TableController.DemoTableIndex
});

Route.get('/table/{id}',{
    uses: EditTableController.DemoTableIndex
});

Route.post('/saveData',{
    uses: EditTableController.saveDemo
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