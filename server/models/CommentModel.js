const mongoose = require('mongoose');



const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Names is required!'],
        match: [/^\w{3,10}\s+\w{3,10}$/, 'Invalid names.']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid email address.'],
        unique: [true, 'This email is already existing.'] 
    },
    comment: {
        type: String,
        required: [true, 'Please enter yours comment'],
        minLength: [1, 'Comment must have at least 1 characters'],
        maxLength: [100, 'Comment must\'t have above 100 characters']
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Comment = mongoose.modul('Comment', CommentSchema);

module.exports = Comment;