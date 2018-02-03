var router = require('express').Router();

var PythonShell = require('python-shell')


router.get('/', function(req,res)
    {

     res.render('index');

    }
);

router.post('/initiate', (req,res)=>{

    PythonShell.run('AAWAAZ.py', function (err) {
    if (err) throw err;
    console.log('finished');
});
});

module.exports = router;
