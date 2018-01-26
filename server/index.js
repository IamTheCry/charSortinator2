const express = require('express');
const app = express();


app.use(express.static('./client'))
app.get('/', (req, res) => res.send('index.html'))
app.get('/sort', (req, res) => res.send(// use sorter function
))

app.listen(3000, () => console.log('Example app listening on port 3000!'));