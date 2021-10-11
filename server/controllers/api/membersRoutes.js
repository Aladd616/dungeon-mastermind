const router = require('express').Router();
const { Members } = require('../../models');

router.post('/', async(req,res)=>{
    try {
        const addMembers = await Members.bulkCreate (req.body)
        res.status(200).json(addMembers)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/userid',async(req,res)=>{
   
    try {
        const getChats = await Members.find({
            where: {user_id: req.params.id }
        });
        res.status(200).json(getChats)
    } catch (err) {
        res.status(500).json(err);
        
    }
})






module.exports = router;