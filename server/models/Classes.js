import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'clive.lim',
    database: 'inorout',
  });

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