import { connect } from 'mongoose';

/**
 *
 * @param {string} url
 */
const databaseConnection = async (url) => {
  try {
    const conn = await connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
  }
};

export default databaseConnection;
