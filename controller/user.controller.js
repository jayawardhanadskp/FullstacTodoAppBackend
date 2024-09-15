const UserService = require("../services/user.services");

exports.register = async(req,res,next)=>{
    try {
        const {email,password} = req.body;

        const sucessRes = await UserService.registerUser(email,password);

        res.json({status:true,sucess:"User Registerd Sucessfully"});
    } catch (error) {
        throw error
    }
}