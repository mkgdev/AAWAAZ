var express = require('express');
var app =    express();
var bodyParser = require('body-parser');
var indexRoutes = require('./routes/index.js');

// Configuration
(function() {
    var childProcess = require("child_process");
    childProcess.spawn = require('cross-spawn');
})(); 

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));






//routes configuration

app.use('/',indexRoutes);




//==========================
// Server config
//==========================

app.listen(process.env.PORT||8000, function()
{
    console.log('Server listening on 8000')
}
);
//===============================