const projectsRouter = require('./posts/projectsRouter.js')
const actionsRouter = require('./posts/actionsRouter.js')


const express = require('express');

//const db = require('./data/db');

const server = express();
server.use(express.json())
server.use('/projects', projectsRouter)
server.use('/actions', actionsRouter)


const port = 5000;

server.get('/', (req, res) => {
    res.send('Hello Node 23');
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
});


