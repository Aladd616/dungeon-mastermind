const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class members extends Model {}

members.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    userChatID: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'userChatID',
      },
    },

    chat_id: {
        type: DataTypes.STRING,
        references: {
            model: 'chat',
            key: 'chat_id',
          },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "members",
  }
);

module.exports = members;