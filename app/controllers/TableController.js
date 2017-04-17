
var BaseController = require('./BaseController');

class TableController extends BaseController {

    static DemoTableIndex(req,res) {
        Demo.find().then( (data) =>{
            res.view('table',{ title: 'Quorra' , DemoObject:data})
        })


        this.getIndex = function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello World \n');
        };
    }
};

module.exports = TableController;