var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://daniyal:123123@ds161890.mlab.com:61890/todolist');
router.get('/tasks', (req, res, next) => {
    db.tasks.find((err, tasks) => {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    })
})

router.get('/task/:id', (req, res) => {
    db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    })
})


router.post('/task/', function(req, res, next) {
    var task = req.body;
    console.log(task)
    if (!task.title || !(task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "bad data",
        })
    }
    else {
        db.tasks.save(task,function(err, task){
            if (err) {
                res.send(err);
            }

            res.json(task);
        })
    }
})

router.delete('task/:id',(req,res,next)=>{
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    })
})

router.put('task/:id',(req,res,next)=>{
    var task = req.body;
    var updTask= {};
    if(task.isDone){
        task.isDone = task.isDone;
    }
    if(task.title){
        task.title = task.title;
    }
    if(!updTask){
        res.status(400);
        res.json({
            "error":"bad data",
        })
    }
    else{
        db.tasks.update({_id:mongojs.ObjectId(req.params.id)},updTask,{},function(err,task){
            if(err){
                res.send(err);
            }
            res.json(task);
        })
    }
})


module.exports = router;