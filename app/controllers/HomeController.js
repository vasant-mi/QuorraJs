
var BaseController = require('./BaseController');

class HomeController extends BaseController {

    static DemoIndex(req,res) {

        res.view('page1',{ title: 'Quorra' })

        console.log("sdfdsf dsfdsf dsfdsfds dsfd");
        Demo.create({"email": "vasant.mindinventory@gmail.com", "password": "mind@123"})
        Demo.find().then( (data) =>{
            console.log("find",data);
        })


        this.getIndex = function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello World \n');
        };
    }
};

module.exports = HomeController;