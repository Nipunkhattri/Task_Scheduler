import mongoose from "mongoose";

const Taskschema  = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    assigneduser:{
        type:String,
        required:true
    },
    DueDate:{
        type:String,
        required:true
    },
    completionStatus: {
        type: String,
        default: false,
    },
})

export default mongoose.model('Task', Taskschema);