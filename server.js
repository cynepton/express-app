const express = require('express');

const app = express();

const PORT = 3000;

// Add a middleware to handle logging within the application
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`[${req.method}], url=${req.url}, requestTimeMs=${delta}`)
})

app.get('/', (req, res) => {
    res.json({
        success: true
    })
})

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}...`);
});