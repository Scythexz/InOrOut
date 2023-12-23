// index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize';
import jwt from 'jsonwebtoken';
import session from 'express-session';

// Setting Up Express App:
// Creating an instance of the Express application.
// Configuring the app to use body-parser for parsing JSON in request bodies.
// Enabling CORS for handling cross-origin requests.

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'your_secret_key'; // Replace with your secret key


app.use(bodyParser.json());
app.use(cors());


// Set up express-session middleware
app.use(
  session({
    secret: 'your_session_secret', // Replace with your session secret
    resave: false,
    saveUninitialized: true,
  })
);


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

// classes
const Classes = sequelize.define('Classes', {
  instructor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class_schedule: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class_status: {
    type: DataTypes.ENUM('Meeting', 'No Meeting'),
    allowNull: false,
  },
  class_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Syncing Sequelize Model with Database:
// Synchronizing the Users model with the database. This creates the Users table if it doesn't exist.

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


// Secret key for JWT, should be stored securely, not hardcoded
const JWT_SECRET = 'your-secret-key';

// Middleware for token verification
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ success: false, message: 'Token not provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Failed to authenticate token' });
    }

    req.user = decoded;
    next();
  });
};

// Handling Login Request:
// Handling a POST request to the /api/login endpoint.
// Attempting to find a user in the database with the provided password and email
// Sending a JSON response indicating success or failure.

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email, password } });
    
    if (user) {
      const { full_name, userType } = user;
      // Create a JWT token upon successful login

      const token = jwt.sign({ email, full_name, userType: user.userType }, JWT_SECRET, {
        expiresIn: '1h', // Token expiration time
      });


      console.log(`User logged in - full_name: ${full_name}, email: ${email}, userType: ${userType}`);
      

      res.json({ success: true, userType: user.userType, message: 'Login successful', token });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Protected route example
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ success: true, message: 'Protected route accessed', user: req.user });
});

// Handling Registration Request:
// Handling a POST request to the /api/register endpoint.
// Creating a new user in the database with the provided full_name, password, email and userType
// Sending a JSON response indicating success or failure.

app.post('/api/register', async (req, res) => {
  const { full_name, password, email, userType} = req.body;

  try {
    const user = await Users.create({ full_name, password, email, userType });
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


// Instructor Adding Classes
app.post('/api/ins-add-class', async (req, res) => {
  const { class_name, class_schedule, class_code } = req.body;

  try {
    const instructor = 'Unknown';

    const newClass = await Classes.create({
      instructor,
      class_name,
      class_schedule,
      class_status: 'Meeting',
      class_code,
    });

    res.json({ success: true, message: 'Class added successfully', newClass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});



