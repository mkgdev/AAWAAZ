var router = require('express').Router();

var PythonShell = require('python-shell')


router.get('/', function(req,res)
    {

     res.render('index');

    }
);

router.post('/initiate', (req,res)=>{

console.log('initiated');
    var options={
       
        args:['-p', 'shape_predictor_68_face_landmarks.dat']
    };


    PythonShell.run('AAWAAZ.py',options, function (err) {
    if (err) throw err;
    console.log('finished');
});
});

module.exports = router;
