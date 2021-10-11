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

    user_id: {
      type: DataTypes.STRING,
      // references: {
      //   model: 'User',
      //   key: 'user_id',
      // },
  
      },
    

    chat_id: {
        type: DataTypes.STRING,
        // references: {
        //     model: 'chat',
        //     key: 'chat_id',
        //   },
    },
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