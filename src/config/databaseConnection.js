const mongoose = require('mongoose');

const connectDB = async (databaseUrl) => {
    try {
        const conn = await mongoose.connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectDB;