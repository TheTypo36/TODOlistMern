import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    TaskName: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    time: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", TaskSchema);
export default Task;
