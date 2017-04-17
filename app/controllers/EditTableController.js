
var BaseController = require('./BaseController');

class EditTableController extends BaseController {

    static DemoTableIndex(req,res) {

        let id = req.params.id;
        Demo.findOne(id).then( (data) =>{
            console.log("data",data);
            res.view('editTable',{ title: 'Quorra' , DemoObject:data})
        })


        this.getIndex = function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello World \n');
        };
    }

    static saveDemo (req, res){
        let DemoObject = req.input.only('email', 'password', 'id');
        Demo.update(DemoObject.id,DemoObject).then( (data) =>{
            res.redirect(App.url.route('table'))
        },(err) =>{
            console.log("err", err);
        });
    }
};

module.exports = EditTableController;