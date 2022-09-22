const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'pug');

const dataRoutes = require('./routes/dataroutes');

app.use(express.static('public'));
app.use('/data', dataRoutes);

app.get('/' , (req, res)=>{

    res.send("<h1>Hello, My Server</h1>");

})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});