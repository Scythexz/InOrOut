// models/Users.js
import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userType: {
      type: DataTypes.ENUM('instructor', 'student'),
      allowNull: false,
    },
  });
  
// Hashing the password before saving to the database
// Users.beforeCreate(async (user) => {
//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(user.password, saltRounds);
//   user.password = hashedPassword;
// });

export default Users;
