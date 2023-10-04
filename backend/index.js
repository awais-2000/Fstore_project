const express = require('express');
const app = express();
const port = 5000;
const connectDB = require('./database.js');
const cors = require('cors');

// Connect to MongoDB
connectDB();

// Allow requests from all origins (for development purposes; restrict in production)
// app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

// Define a simple route
app.get('/', (req, res) => {
  res.send("Hello, we are in the backend");
});

// use express
app.use(express.json())

// define a post routes
app.use('/api', require('./Routes/newUser.js'))

// define a Get routes
app.use('/api', require('./Routes/DisplayData.js'))

// define a Post routes
app.use('/api', require('./Routes/OrderData.js'))

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
