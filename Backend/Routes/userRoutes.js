const express = require("express")
const {Signup, Login} = require("../Controller/userController")

const userRouter = express.Router()

userRouter.post("/signup",Signup)
userRouter.post("/login",Login)


module.exports = userRouter 