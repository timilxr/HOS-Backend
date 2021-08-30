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
    folder: {
      // id: {
        type: Schema.Types.ObjectId,
        ref: 'Prescription'
      // },
      // vitals: {type: String}
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
    userSchema.methods.hashPassword = password => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    userSchema.methods.matchPasswords = enteredPassword => {
        return bcrypt.compareSync(enteredPassword, this.password);
    };

    const User = mongoose.model('User', userSchema);
    export default User;
