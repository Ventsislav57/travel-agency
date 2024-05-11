const Comment = require("../models/CommentModel")


exports.create = async (commentData) => {

    try {
        const comment = await Comment.create(commentData);
        return comment;
    } catch (error) {
        throw new Error({message: error.message});
    }
}