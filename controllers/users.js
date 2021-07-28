import User from '../models/user.model.js';
// import { usersData } from '../data.js';


export const getUsers = async (req, res) => {
    // User.insertMany(usersData);
    try{
        const users = await User.find({},{createdAt: 0, updatedAt: 0});
        // console.log(users);
        res.status(200).json(users);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'No User not found'});
    }
}

export const getUserById = async (req, res) => {
    try{
        const user = await User.find({_id: req.params.id},{createdAt: 0, updatedAt: 0});
        user = user[0];
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
    newUser.password = newUser.hashPassword(newUser.password)
    try{
        const user = await newUser.save();
        // console.log(Users);
        delete user.password;
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
        if (!user.matchPasswords(password)) {
            return res.status(400).json({message: error.message, info: 'password error'})
        }
        user.password = password;
        user.isAdmin = isAdmin;
        user.toBeConsulted = toBeConsulted;
        user.role = role;
        // console.log(Users);
        try{
            const newUser = await user.save();
            delete newUser.password;
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
    // console.log(email);
     User.findOne({email: email}).then(user => {
         if(user.matchPasswords(password)){
            // console.log('me1');
            // console.log(user);
            return res.status(200).json({info: true, user: user});
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