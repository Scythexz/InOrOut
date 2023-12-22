// index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize';

// Setting Up Express App:
// Creating an instance of the Express application.
// Configuring the app to use body-parser for parsing JSON in request bodies.
// Enabling CORS for handling cross-origin requests.

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


// Setting Up Sequelize:
// Creating a Sequelize instance to connect to a PostgreSQL database.
// Defining a User model with attributes username and password.

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'clive.lim',
  database: 'inorout',
});

const User = sequelize.define('User', {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userType: {
    type: DataTypes.ENUM('instructor', 'student'),
    allowNull: false,
  },
});

// Syncing Sequelize Model with Database:
// Synchronizing the User model with the database. This creates the User table if it doesn't exist.

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


// Handling Login Request:
// Handling a POST request to the /api/login endpoint.
// Attempting to find a user in the database with the provided username and password.
// Sending a JSON response indicating success or failure.

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username, password } });
    if (user) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


// Handling Registration Request:
// Handling a POST request to the /api/register endpoint.
// Creating a new user in the database with the provided username and password.
// Sending a JSON response indicating success or failure.

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
