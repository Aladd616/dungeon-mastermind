const { Model, DataTypes, UUIDV4 } = require('sequelize');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../config/connection');


class User extends Model {
  checkPassword(pw) {
    return bcrypt.compareSync(pw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    isDM: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    chatId : {
      type: DataTypes.STRING,
      unique: true,
    },

    character_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'character',
        key: 'id',
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        newUserData.chatId = await uuidv4()
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;
