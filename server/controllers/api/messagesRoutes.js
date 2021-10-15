const router = require('express').Router();
const { Messages } = require('../../models');

router.post('/', async(req,res)=>{
    try {
        const addMessages = await Messages.create(req.body);
        res.status(200).json(addMessages)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async(req,res)=>{
    try {
        const getMessages = await Messages.findAll();
        res.status(200).json(getMessages)
        
    } catch (err) {
        res.status(500).json(err)
    }
    


})

module.exports = router;