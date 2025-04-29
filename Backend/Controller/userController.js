const usermodel = require("../Model/Usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const Signup = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "Please provide name, email, and password" });
        }

        const existUser = await usermodel.findOne({ email });
        if (existUser) {
            return res.json({ message: "User already exists" });
        }

        const hashpassword = await bcrypt.hash(password, 10);


        const newuser = await usermodel.create({
            username,
            email,
            password: hashpassword,
            isAdmin: role === "admin",
            role: role || "user" 
        });

        console.log("Signup success", newuser);

        res.status(201).json({ message: "Signup success", user: newuser });

    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Signup error", error });
    }
};


const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }
        const user = await usermodel.findOne({ email })
        if (!user) {
            res.json({ message: "user not found" })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign(
            {
              userId: user._id,
              email: user.email,
              isAdmin: user.isAdmin, 
            },
            "privet_Key123",
            { expiresIn: "1d" }
        );
        
          
        res.status(200).json({ message: "Login success", token, user });
    } catch (error) {
        res.json({ message: "login error", error })
        console.log("login error",error)
    }
}

module.exports = {
    Signup,
    Login
};
