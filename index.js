const express= require('express');
const morgan =require ('morgan')
const createError = require('http-errors')
require ('dotenv').config
const app =express()
const PORT= process.env.PORT||3002
// const express = require('express')
// const app = express()
// const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about')
})
// app.listen(PORT,()=>{
//     console.log('server is running on port ${PORT} ')
// })

app.listen(PORT, () => {
  console.log(`Example web api listening on port http://localhost:${PORT}`)
})
// app.get("/", async (req, res) => {
//   res.send("Hello from my Deta Micro")
// });

module.exports = app;