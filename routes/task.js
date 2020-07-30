var express = require('express');
var router = express.Router();
var unirest = require("unirest");


var User = require('../models/user');
router.get('/createTask', function (req, res) 
{
    var newTask = new Task();
    newTask.save(function (err, data) {
        if (err) {
            console.log(err);
            res.render('error');
        } else {
            res.redirect('/task/' + data._id);
        }
    })
});

router.get('/task/:id', function (req, res) {
    if (req.params.id) {
        Task.findOne({ _id: req.params.id }, function (err, data) {
            if (err) {
                console.log("erooor " +err);
                res.render('error', { invalid : "This Collab doesn't exist"  });
            }
            if (data) {
                res.render('task', { content: data.content, roomID: data.id });
            } else {
                res.render('error', { invalid: "Is not you its me!" });
            }
        })
    } else {
        res.render('error');
    }
});

function callba(data,res) {
    console.log(data);
    res.send({ error :data});

}
/*router.post('/task/:id', function (req, res, callback) 
{

    var unirest = require("unirest");

    var reqq = unirest("POST", "https://judge0.p.rapidapi.com/submissions");

    reqq.headers({
        "x-rapidapi-host": "judge0.p.rapidapi.com",
        "x-rapidapi-key": "18c523759dmsh7666d68c362130cp1166e8jsnb39d42270efb",
        "content-type": "application/json",
        "accept": "application/json",
        "useQueryString": true
    });

    reqq.type("json");
     reqq.send({
        "language_id": 50,
        "source_code": "#include <stdio.h>\n\nint main(void) {\n  char name[10];\n  scanf(\"%s\", name);\n  printf(\"hello %s\\n\", name);\n  return 0;\n}",
        "stdin": "world"
    }).then((response,callback) => {
        console.log(response.body);
        callba(response.body,res);
    });

    
    var token ;
     reqq.end(function (ress) {
        if (res.error) throw new Error(res.error);
        token = ress.body.token;
        console.log(token);
    });

    var add = "https://judge0.p.rapidapi.com/submissions/" + tostring(token);
    console.log(add);
    var reqq = unirest("GET", add);

    reqq.headers({
        "x-rapidapi-host": "judge0.p.rapidapi.com",
        "x-rapidapi-key": "18c523759dmsh7666d68c362130cp1166e8jsnb39d42270efb",
        "useQueryString": true
    });


    reqq.end(function (ress) 
    {
        console.log(ress.body);
        if (res.error) throw new Error(res.error);

        
    });

    

    
});

*/
module.exports = router;