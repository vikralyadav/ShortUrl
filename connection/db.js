const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/shorturl', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Exit the app if DB connection fails
    }
};

module.exports = connect;