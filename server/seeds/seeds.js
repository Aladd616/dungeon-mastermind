// Seed file does seed file things
const sequelize = require('../config/connection');
const { Character,User } = require('../models');

const characterData = require('./characterData.json');
const userData = require ('./user.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Character.bulkCreate(characterData, {
    individualHooks: true,
    returning: true,
  });
  await User.bulkCreate(userData,{
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};

seedDatabase();
