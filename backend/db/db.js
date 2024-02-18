const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dinnerborne:P%40ssw0rd@cluster0.rmfr9cv.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
