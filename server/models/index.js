const User = require('./User');
const Character = require('./Character');
const Ability = require('./Ability');
const AbilityList = require('./AbilityList');
const Chat = require ('./chat');
const Messages = require ('./messages');
const Members = require ('./chatMembers');


Ability.belongsToMany(Character, {
  through: 'AbilityList',
  foreignKey: 'ability_id',
});

Character.belongsToMany(Ability, {
  through: 'AbilityList',
  foreignKey: 'character_id',
});

Character.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Character, {
  foreignKey: 'user_id',
});

// Chat.hasMany(Members,{
//   foreignKey: "chat_id"
// });
// Members.belongsTo (Chat,{
//   foreignKey: "chat_id"
// });

// User.hasMany(Members,{
//   foreignKey: 'user_id'
// });

// Members.belongsTo(User,{
//   foreignKey: 'user_id'
// });


module.exports = {
  User,
  Character,
  Ability,
  AbilityList,
  Chat,
  Members,
  Messages
};
