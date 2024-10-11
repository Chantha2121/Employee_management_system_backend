import express from 'express'
import {config} from 'dotenv'

config();

const app = express();
const port = process.env.port;

app.get('/', (req, res) => {
    res.send("Hello, world!");
})

app.listen(port, ()=>{
    console.log(`Server is listening on http://localhost:${port}`)
})



