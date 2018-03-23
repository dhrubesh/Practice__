const express = require('express');
const express_graphql = require('express-graphql');
const {buildSchema} = require('graphql');

app = express();
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(4000,() => console.log('listening at port 4000'));
