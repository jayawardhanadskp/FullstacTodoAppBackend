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

exports.login = async (req,res,next) => {
    try {
        const {email,password} = req.body;

        const user = await UserService.checkUser(email);

        if (!user) {
            return res.status(404).json({ status: false, message: 'User Not Exist'});
        }

        const isMatch = user.comparePassword(password);
        if (isMatch == false) {
            return res.status(400).json({status:false, message: 'Password Invalid'});
        }

        // jwt token
        let tokenData = {_id:user._id, email:user.email};

        const token = await UserService.genarateToken(tokenData,"secretKey","1h");

        res.status(200).json({status:true, token:token});

    } catch (e) {
        throw e;
    }
}