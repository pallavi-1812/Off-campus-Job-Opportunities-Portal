import PostMessage from "../models/PostModal.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find().sort("-createdAt");
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsBySearchByText = async (req, res) => {
  const { searchText } = req.query;
  try {
    const posts = await PostMessage.find({ $text: { $search: searchText.split(",").join(" ") } }).sort("-createdAt");
    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  const { jobTitle, jobType, state, city } = req.query;
  try {
    const posts = await PostMessage.find({ $or: [{ jobTitle }, { "Location.State": state }, { "Location.City": city }, { jobType: { $in: jobType.split(",") } }] }).sort("-createdAt");
    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getFavoritePosts = async (req, res) => {
  const user = [req.userId + ""];
  try {
    const posts = await PostMessage.find({ favorites: { $in: user } }).sort("-createdAt");
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({ ...post, createdAt: new Date().toISOString() });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePosts = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No Post with that Id");
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, { ...post, id }, { new: true });
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No Post with that Id");
  }
  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted Successfully" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }
  const user = [req.userId + ""];
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const post = await PostMessage.findById(id);
  const index = post.favorites.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.favorites.push(req.userId); //like
  } else {
    post.favorites = post.favorites.filter((id) => id !== String(req.userId)); //dislike
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
  res.status(200).json(updatedPost);
};
