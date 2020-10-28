const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const restaurants = require('./restaurants')
//Middlewares
app.use(cors());


// Handle Production
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));

  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server started on port: ${port}`))

app.get('/api/eaterys', (req, res) => {
  res.send(restaurants)
})

//app.use(errorHandler)