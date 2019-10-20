var router = require('express').Router();

var PythonShell = require('python-shell')

var python_process;



router.get('/', function(req,res)
    {

     res.render('index');

    }
);


router.post('/initiate', (req,res)=>{

// console.log('initiated');
//     var options={
       
//         args:['-p', 'shape_predictor_68_face_landmarks.dat']
//     };


//     PythonShell.run('AAWAAZ.py',options, function (err) {
//     if (err) throw err;
//     console.log('finished');
// });
var options={
       
    args:['-p', 'shape_predictor_68_face_landmarks.dat']
};

let pyshell = new PythonShell('AAWAAZ.py',options);
pyshell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
    console.log('finished');
    res.sendStatus(200);

  });
  python_process = pyshell.childProcess;

 
});

router.get('/stop_python', function(req, res) {
    python_process.kill('SIGINT');
    res.send('Stopped');
 });

module.exports = router;
