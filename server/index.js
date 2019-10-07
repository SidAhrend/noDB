
const data = require("./controller")
const list = require('./listController')

const express = require("express")

const serverport = 5757;

const app = express();

app.use(express.json());

//display data
app.get('/api/data', data.get)  

//comment get endpoint
app.get('/api/comments', list.getComments)
//comment post endpoint
app.post('/api/comments', list.addComment)
//comment delete endpoint
app.delete('/api/comments/:index', list.deleteComment)

app.listen(serverport, () => {
    console.log('its running on 5757')
})