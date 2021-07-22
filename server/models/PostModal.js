import mongoose from "mongoose";

const jobDescSchema = mongoose.Schema({
  Info: String,
  Eligibility: String,
  ReqSkills: String,
  Rewards: String,
});

const locationSchema = mongoose.Schema({
  City: String,
  State: String,
});

const postSchema = mongoose.Schema({
  jobTitle: String,
  jobType: [String],
  postedBy: String,
  duration: String,
  salary: String,
  company: String,
  description: {
    type: { jobDescSchema },
    default: {},
  },
  applyLink: String,
  Location: {
    type: { locationSchema },
    default: {},
  },
  startDate: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

postSchema.index({ '$**': 'text' });

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
