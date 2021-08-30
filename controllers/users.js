import User from '../models/user.model.js';
// import { usersData } from '../data.js';


export const getUsers = async (req, res) => {
    // User.insertMany(usersData); 
    try{
        const users = await User.find({},{createdAt: 0, updatedAt: 0, __v: 0});
        // console.log(users);
        res.status(200).json(users);
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'No User not found'});
    }
}

export const getUserById = async (req, res) => {
    try{
        let user = await User.find({_id: req.params.id},{createdAt: 0, updatedAt: 0, __v: 0});
        user = user[0];
        // console.log(user);
        res.status(200).json(user);
    }
    catch(error){
        console.log(error);
        res.status(400).json({message: error.message, info: 'User not found'});
    }
}

export const deleteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        console.log(user);
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
    console.log(newUser);
        await newUser.save()
        .then(user=>{
            console.log(user);
        delete user.password;
        res.status(200).json(user);
        })
        .catch(error=>{
            console.log(error);
            res.status(400).json({message: error.message, info: 'Error creating User'});
        })
}

export const updateUser = async (req, res) => {
    const {full_name, email, phone, admin, to_be_consulted, folder, role} = req.body;
    const id = req.params.id;
    // console.log(req.body);

    try{
        const user = await User.findById(id);
        // console.log(user);
        user.full_name = full_name;
        user.email = email;
        user.phone = phone;
        user.folder = folder;
        // user.password = password;
        user.admin = admin;
        user.role = role;
        try{
            const newUser = await user.save();
            console.log(newUser);
            delete newUser.password;
            res.status(200).json({one: user._doc, all: newUser});
        }
        catch(error){
            console.log(error);
            res.status(400).json({message: error.message, info: 'User not updated'})
        }
    }
    catch(error){
        res.status(400).json({message: error.message, info: 'User not found'});
    }
}
export const verify = (req, res) => {
    const {email, password, phone} = req.body;
    // console.log(email);
     User.findOne({email: email, phone: phone}).then(user => {
         if(password){
            if(user.matchPasswords(password)){
                // console.log('me1');
                console.log(user);
                return res.status(200).json({info: true, user: user});
            }
            return res.status(200).json({info: false, message: 'no user'});
        }
        return res.status(200).json({info: true, user: user});
        // console.log('me2');
     })
    .catch((error)=>{
        // console.log('me3');
        console.log(error);
        res.status(400).json({message: error.message, info: false});
    })
}