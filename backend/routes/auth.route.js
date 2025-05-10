const express = require('express')
const { register, login } = require('../controller/auth.controller')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'public/uploads/')
  },
  file:function(req,file,cb){
    cb(null,file.originalname)
  }
})

const upload = multer({storage})

router.post('/register',upload.single('profileImage'),register)
router.post('/login',login)

module.exports = router
