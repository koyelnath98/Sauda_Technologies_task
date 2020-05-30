const express = require('express');
const apiCallFromRequest = require('./Request');

const app = express();

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  
    apiCallFromRequest.callApi(function(response){

             res.render('show',{'datas': response } );
               
            });   
});

app.listen(3000, function () {
  console.log(' yahoo Express app listening on port 3000');
});

