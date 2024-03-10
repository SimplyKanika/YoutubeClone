import mongoose from "mongoose";

const commentSchema= mongoose.Schema({
    videoId:String,
    userId:String,
    commentBody:String,
    userCommented:String,
    commentOn:{type:Date,default:Date.now},
    userLocation: {
      type: {
        latitude: Number,
        longitude: Number,
      },
    },
  });



export default mongoose.model("Comments",commentSchema)