const mongoose = require('mongoose');

// MongoDB URI (Uniform Resource Identifier) - Replace with your actual MongoDB URI.
const mongoURI = 'mongodb+srv://Awais:awaiisi121@cluster0.a1udvyj.mongodb.net/foodstore?retryWrites=true&w=majority';

/**
 * Connect to the MongoDB database using Mongoose.
 */
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the provided URI.
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // If the connection is successful, log a success message.
    console.log('Connected to MongoDB');

    // Fetch data from the "food_items" collection within the connected database.
    // The `await` keyword ensures that this operation is asynchronous and waits for it to complete.
    const fetchedData = await mongoose.connection.db.collection('food_items').find({}).toArray(); // (1)
    const foodCategory = await mongoose.connection.db.collection('foodCategory').find({}).toArray(); // (2)

    // console.log("Fetched data ===>")
    // console.log(fetchedData)

    global.food_items = fetchedData; // (3)
    global.foodCategory = foodCategory; // (4)

    // console.log('Fetched food_items:', global.food_items); // (5)
    // console.log('Fetched foodCategory:', global.foodCategory); // (6)
  } catch (error) {
    // If an error occurs during the connection or data fetching, log the error message.
    console.error('Error connecting to MongoDB:', error);
  }
};


module.exports = connectDB;
