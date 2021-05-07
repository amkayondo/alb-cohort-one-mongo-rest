import express, { json } from 'express'
import db from './config';
import userRouter from './views/user';

const server = express();

server.get("/", (req, res) => {
    // fix this
    res.json({
        message: "welcome to esibuuko"
    })
})
server.use(json())
server.use(userRouter);

// 404
server.use("*", (req, res) => res.json({ error: "notfound" }))

server.listen(8080, () => {
    console.log(`Listening on PORT 8080`)
    db.on("error", (error) => console.log(error))
    db.once('open', ()=> console.log('db connected successfully'))
})