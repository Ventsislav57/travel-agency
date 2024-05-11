const mongoose = require('mongoose');



const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [4, 'Username must have at least 4 characters'],
        maxLength: [13, 'Username must\'t have above 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid email address.'],
    },
    comment: {
        type: String,
        required: [true, 'Please enter yours comment'],
        minLength: [1, 'Comment must have at least 1 characters'],
        maxLength: [100, 'Comment must\'t have above 100 characters']
    },
    rating: {
        type: Array,
        default: []
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;