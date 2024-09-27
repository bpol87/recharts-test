const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

// Route Includes
const beetRouter = require('./routers/beet.router.js');

// Express Middleware
app.use(express.json());
app.use(express.static('build'));


// Routes
app.use('/api/beets', beetRouter)

// Listen Server & Port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });