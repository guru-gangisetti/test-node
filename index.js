import express from 'express';

const app =  express();

const PORT = process.env.port || 5050; 
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
