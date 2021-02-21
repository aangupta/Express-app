const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/static', express.static('Public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});