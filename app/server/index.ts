import express from 'express';

const app = express();

app.use('/hello-world', (req, res) => {
    res.send('hello-world');
});

app.listen(process.env.PORT).on('listening', () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
