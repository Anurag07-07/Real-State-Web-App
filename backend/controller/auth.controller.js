const mongoose = require('mongoose')
const express= require('express')
const { UserModel } = require('../Schema/User.Schema')
const bcrypt  = require('bcrypt')
const {z} = require('zod')
const jwt = require('jsonwebtoken')

const register = async(req,res)=>{
  //Fetch Data
  try {

    //Zod Validation 
    const requiredBody = z.object({
      email:z.string().min(5).max(50).email(),
      firstname:z.string().min(5).max(50),
      lastname:z.string().min(2).max(50),
      password:z.string().min(4).max(20).regex(/[A-Z]/).regex(/\d/).regex(/[a-z]/).regex(/[^A-Za-z0-9]/)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if (!parsedDataWithSuccess.success) {
      res.status(404).json({
        message:"Please Enter Valid Data",
        error:parsedDataWithSuccess.error
      })
    }else{
    
    const {firstname,lastname,email,password} = req.body
  //Fetch The Image File
  const profileImage = req.file

  //if Image no Exist
  if (!profileImage) {
    res.status(400).send(`No File Uploaded`)
  }

  //Get The Path of Profile Image
  const profileImagePath = profileImage.path

  //Check The User Exist or not
  const checking = await UserModel.findOne({
    email
  })

  if (checking) {
    res.status(409).json({
      message:"User Already Exist!"
    })
    return
  }
  
  const salt = await bcrypt.genSalt()
  const hash = await bcrypt.hash(password,salt)

  //Creating New User
  // Way 1
  // await UserModel.create({
  //   email,
  //   password:hash,
  //   firstname,
  //   lastname,profileImagePath
  // })

  //   res.status(200).json({
  //     message:"User Created Successfully"
  //   })     

  //Way 2
  console.log(profileImagePath);
  
  const newUser = new UserModel({
    firstname,
    lastname,
    email,
    password:hash,
    profileImagePath
  })

  await newUser.save()
  res.status(200).json({
    message:"User Created Succesfully",
    user:newUser
  })
  }
  } catch (error) {
   res.status(403).json({
    error:error,
    message:"Invalid Credentials! User Registration Failed"
   }) 
  }
}

const login = async(req,res)=>{
  try {
    
    const requiredBody = z.object({
      email:z.string().min(5).max(50).email(),
      password:z.string().min(4).max(20).regex(/[A-Z]/).regex(/\d/).regex(/[a-z]/).regex(/[^A-Za-z0-9]/)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if (!parsedDataWithSuccess.success) {
      res.status(404).json({
        message:"Please Enter Valid Data",
        error:parsedDataWithSuccess.error
      })
    }else{

    const {email,password} = req.body
    
    //Check User Present or not
    const user = await UserModel.findOne({
      email
    })

    if (!user) {
      res.status(403).json({
        message:"User not Exist"
      })
      return
    }

    //If User Present Match the Password
    const MatchPassword = await bcrypt.compare(password,user.password)
    console.log('1');
    
    //If password macth Genereate password
    if (MatchPassword) {
      const token = jwt.sign({
        id:user._id.toString()
      },process.env.JWT_SECRET)
      console.log('2');
      
      delete user.password
      
      console.log('3');
      res.status(200).json({
        token,
        user
      })
      console.log('4');
    }
  }
  } catch (error) {
    res.status(500).json({
      error:error,
      message:"Invalid Credentials"
    })
  }
}

module.exports = {register,login}