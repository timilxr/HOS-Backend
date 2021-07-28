import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    full_name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
      },
    phone: {
        type: String,
        required: true,
        // unique: true,
        },
    password: {
        type: String,
        required: true,
        select: false
      },
    admin: {
        type: Boolean,
        required: true,
        default: false,
      },
    to_be_consulted: {
        type: Boolean,
        required: true,
        default: false,
      },
    role: {
        type: String,
        required: true,
        default: 'patient',
      },
    },
    {
      timestamps: true,
    });
    userSchema.methods.hashPassword = async password => {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hashSync(password, salt);
    };

    userSchema.methods.matchPasswords = async enteredPassword => {
        return await bcrypt.compareSync(enteredPassword, this.password);
    };

    const User = mongoose.model('User', userSchema);
    export default User;
