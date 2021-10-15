const router = require('express').Router();
const { Chat } = require('../../models');

//create new chat
router.post('/', async(req,res) =>{
    
try {
    const newChat = await Chat.create();
    res.status(200).json(newChat)

} catch (err) {
    res.status(500).json(err);
  }
})


router.delete ("/:chatId", async (req,res)=>{
    try {
        const deleteChat = await Chat.destroy(req.params.chatId);
        res.status(200).json(deleteChat)
    } catch (err) {
        res.status(500).json(err);
    }
    
    
})


module.exports = router;