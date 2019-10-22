const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`This server is working on localhost: ${port}`);
})


module.exports = app;
