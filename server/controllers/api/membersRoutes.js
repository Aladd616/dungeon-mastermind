const router = require('express').Router();
const { Members } = require('../../models');

router.post('/', async(req,res)=>{
    try {
        const addMembers = Members.create (req.body)
        res.status(200).json(addMembers)
    } catch (err) {
        res.status(500).json(err);
    }
})






module.exports = router;