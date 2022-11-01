const express = require("express")
const router = express.Router()
module.exports = router
const USER = require('./Model_User')
const cors = require('cors')

router.post('/register',cors(),async(req,res)=>{
    const { name, email, password, reEnterPassword} = req.body
    USER.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const User_Data = new USER({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                reEnterPassword:req.body.reEnterPassword
            })
            try{

                const dataToSave =  User_Data.save()
                res.status(200).json({"status":"success", dataToSave })
                res.send()
            
                
            }
            catch(error){
                res.status(400).json({"status":"Failed", message: error.message })
            }

        }
    }) 
    
})


router.post("/login", (req, res)=> {
    const { email, password} = req.body
    USER.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

