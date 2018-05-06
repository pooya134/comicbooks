const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();
// const schema = require('./schema.js');
//
// app.use('/graphql', expressGraphQL({
//   schema:schema,
//   graphiql: true, 
// }));

app.listen(3001, () => {
  console.log('server running on port 4000..');
});
