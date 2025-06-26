// models/Subject.js
import mongoose, { Schema } from 'mongoose';

const LectureProgressSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User', 
  },
  id: String,
  name: String,
  chapters: [
    {
      id: String,
      name: String,
      lectures: [
        {
          id: String,
          title: String,
          duration: String,
          date: String,
          completed: { type: Boolean, default: false }, // Track if the lecture is completed
        },
      ],
    },
  ],
});

const LectureProgress = mongoose.model('LectureProgress', LectureProgressSchema);
export default LectureProgress;
