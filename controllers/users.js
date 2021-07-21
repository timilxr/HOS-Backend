import User from '../models/user.model.js';
// import { usersData } from '../data.js';


export const getUsers = async (req, res) => {
    // User.insertMany(usersData);
    try{
        const users = await User.find();
        // console.log(users);
        res.status(200).json(users);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'No User not found'});
    }
}

export const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        // console.log(user);
        res.status(200).json(user);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'User not found'});
    }
}

export const deleteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        // console.log(user);
        res.status(200).json(user);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'User not deleted'});
    }
}

export const createUser = async (req, res) => {
    const details = req.body;

    const newUser = new User(details);
    try{
        const user = await newUser.save();
        // console.log(Users);
        res.status(200).json(user);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'Error creating User'});
    }
}

export const updateUser = async (req, res) => {
    const {fullName, email, phone, password, isAdmin, toBeConsulted, role} = req.body;
    const id = req.params.id;

    try{
        const user = await User.findById(id);
        user.fullName = fullName;
        user.email = email;
        user.phone = phone;
        if (password !== '') user.password = password;
        user.isAdmin = isAdmin;
        user.toBeConsulted = toBeConsulted;
        user.role = role;
        // console.log(Users);
        try{
            const newUser = await user.save();
            res.status(200).json(newUser);
        }
        catch(error){
            res.status(400).json({message: error.message, info: 'User not updated'})
        }
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'User not found'});
    }
}
export const verify = (req, res) => {
    const {email, password} = req.body;
    console.log(email);
     User.findOne({email: email, password: password}).then(user => {
         if(user){
            // console.log('me1');
            // console.log(user);
            return res.status(200).json({info: true, user: user[0]});
        }
        // console.log('me2');
        return res.status(200).json({info: false, message: 'no user'});
     })
    .catch((error)=>{
        // console.log('me3');
        console.log(error);
        res.status(400).json({message: error.message, info: false});
    })
}