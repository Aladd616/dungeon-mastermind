const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { v4: uuidv4 } = require('uuid');
class chat extends Model {}

chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    chat_id: {
      type: DataTypes.STRING,
      // references: {
      //   model: 'members',
      //   key: 'chat_id',
      // }
    },
  },
  {
    hooks: {
        beforeCreate: async (newChat) => {
          newChat.chat_id = await uuidv4()
          return newChat;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "chat",
  }
);

module.exports = chat;