import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email : {
        type : String,
        unique : [true, 'Email already exists'],
        required : [true, 'Email is required']
    },
    username : {
        type : String, 
        required : [true, 'Username is required'],
        unique : [true, 'Username already exists']
    },
    image : {
        type : String
    },
    bookmarks : [
        {
            type : Schema.Types.ObjectId,
            ref : 'Property'
        }
    ]
},{
    timestamps : true
});

// updated at and created at get updated thanks to timestamps

const User = models.user || model('user', UserSchema);
export default User;  // export the model to use it in other files
