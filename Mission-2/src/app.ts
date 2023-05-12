import express from 'express';
import cors from 'cors'

const app = express();

app.use(cors());

app.use('/', (req, res) => {
    res.send('Running in browser');
});

export default app;