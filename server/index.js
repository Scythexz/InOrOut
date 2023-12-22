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
// Defining a User model with attributes full_name, password, email and userType

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'clive.lim',
  database: 'inorout',
});

const Users = sequelize.define('Users', {
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
// Synchronizing the Users model with the database. This creates the Users table if it doesn't exist.

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


// Handling Login Request:
// Handling a POST request to the /api/login endpoint.
// Attempting to find a user in the database with the provided password and email
// Sending a JSON response indicating success or failure.

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email, password } });
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
// Creating a new user in the database with the provided full_name, password, email and userType
// Sending a JSON response indicating success or failure.

app.post('/api/register', async (req, res) => {
  const { full_name, password, email, userType} = req.body;
  // console.log('Received registration data:', { full_name, password, email, userType });

  try {
    const user = await Users.create({ full_name, password, email, userType });
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
