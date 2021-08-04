import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 0,
  },
  id: {
    type: String,
  },
});

const UserModal = mongoose.model("User", userSchema);

export default UserModal;
