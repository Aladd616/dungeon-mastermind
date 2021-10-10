// =============================================
//  API Routes
// ---------------------------------------------
// Handles serving of dynamic resources
// =============================================
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const abilityRoutes = require('./abilityRoutes');
const diceRoutes = require('./diceRoutes');
const abilityListRoutes = require('./abilityListRoutes');
const combatTrackerRoutes = require('./CombatTrackerRoutes');
const chatRoutes = require ('./chatRoutes');
const memberRoutes = require('./membersRoutes');


router.use('/users/', userRoutes);
router.use('/abilities/', abilityRoutes);
router.use('/characters/', characterRoutes);
router.use('/dice/', diceRoutes);
router.use('/abilitylist/', abilityListRoutes);
router.use('/CombatTracker/', combatTrackerRoutes);
router.use('/chat/',chatRoutes);
router.use('/members/',memberRoutes);

module.exports = router;
