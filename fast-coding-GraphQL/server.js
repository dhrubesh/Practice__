const express = require('express');
const express_graphql = require('express-graphql');
const {buildSchema} = require('graphql');

//GraphQL Schema
var schema = buildSchema(`
	type Query{
		message: String
	}
`)

//Root resolver
var root = {
	message: () => 'Hello World'
}

//Express Server and GraphQL endpoint
app = express();
app.use('/graphql',express_graphql({
	schema: schema,
	rootValue: root,
	graphiql: true
}))
app.listen(4000,() => console.log('listening at port 4000'));
