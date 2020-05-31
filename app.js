const express = require('express');
const apiCallFromRequest = require('./Request');

const app = express();

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  
    apiCallFromRequest.callApi(function(response){
               //showing all data in console
                 console.log(response);
             res.render('show',{'datas': response } );
               
            });   
});

app.get('/trade/:id', (req, res) => {
      // find the trade 
      apiCallFromRequest.callApi(function(response){
      const trade = response.filter((trade) => {
        return trade.id == req.params.id
      })[0]
      // render the `trade.ejs` template with the trade content
      res.render('trade', {
        'data': trade
      });

    });

    })

app.listen(3000, function () {
  console.log(' yahoo Express app listening on port 3000');
});

