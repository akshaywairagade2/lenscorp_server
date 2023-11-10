const express=require('express')
const {countPost} = require('../controllers/countUpdate')

const router=express.Router();

router.post('/countPost',countPost);

module.exports=router;