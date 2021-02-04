const express = require('express')
const app = express()
const router = require('./router/routes')
const PORT = process.env.PORT || 5000

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.use('/api', router)


app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})
