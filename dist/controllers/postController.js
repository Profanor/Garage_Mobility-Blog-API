"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.getPostById = exports.getPosts = exports.createPost = void 0;
const Posts_1 = __importDefault(require("../models/Posts"));
const logger_1 = __importDefault(require("../logger"));
// Create a blog post
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, author } = req.body;
        // input validation check for empty fields
        if (!title || !content || !author) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        // create a new blog post
        const newPost = new Posts_1.default({ title, content, author });
        yield newPost.save();
        // respond with a success message and the created post object
        return res.status(201).json({ message: 'Your post was created successfully', newPost });
    }
    catch (error) {
        logger_1.default.error('An error occured while trying to create that post:', error);
        return res.status(500).json({ error: 'Internal server error ' });
    }
});
exports.createPost = createPost;
// Get all blog posts
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Posts_1.default.find();
        return res.status(200).json({ message: 'OK', posts: posts });
    }
    catch (error) {
        logger_1.default.error('An error occured fetching posts:', error);
        return res.status(500).json({ error: 'Internal server error ' });
    }
});
exports.getPosts = getPosts;
// Get a single blog post by its ID
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let postId = req.params.postId;
        const post = yield Posts_1.default.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post with the specified ID was not found' });
        }
        return res.status(200).json({ message: 'OK', post });
    }
    catch (error) {
        return res.status(500).json({ error: 'Internal server error ' });
    }
});
exports.getPostById = getPostById;
// Update an existing blog post
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        let postId = req.params.postId;
        const updatedPost = yield Posts_1.default.findByIdAndUpdate(postId, { title, content, }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        return res.status(200).json({ message: 'Post updated successfully', updatedPost });
    }
    catch (error) {
        return res.status(500).json({ error: 'Internal server error ' });
    }
});
exports.updatePost = updatePost;
// Delete a blog post
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let postId = req.params.postId;
        const post = yield Posts_1.default.findByIdAndDelete(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ error: 'Internal server error ' });
    }
});
exports.deletePost = deletePost;
