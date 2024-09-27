import User from "../model/Users.js";

const postSingup = async (req, res) => {
    const { fullname, email, password } = req.body;
    const user = new User({ fullname, email, password });
    try {
        const saveduser = await user.save()
        res.json({
            success: true,
            message: "Signup Done Successfully",
            data: saveduser
        })

    }
    catch (e) {
        console.error(e)
        res.json({
            success: false,
            message: "failed  to signup",
            data: null
        })
    }

}

const postlogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email: email,
            password: password
        })

       if(user){
        res.json({
            success: true,
            message: "Login Successfully",
            data: user,

        })
       }

    } catch (e) {
        console.error(e)
        res.json({
            success: false,
            message: "Invalid Email or Password",
            data: null
        })
    }
}

export {
    postSingup,
    postlogin
}