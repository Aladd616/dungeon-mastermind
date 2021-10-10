const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class messages extends Model {}

messages.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    chat_id: {
        type: DataTypes.STRING,
        references: {
          model: 'chat',
          key: 'chat_id'
        }
    },

    sender: {
      type: DataTypes.STRING
      
    },
    text: {
        type: DataTypes. STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "messages",
  }
);

module.exports = messages;