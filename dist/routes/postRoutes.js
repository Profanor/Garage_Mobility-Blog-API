"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = require("../controllers/postController");
const router = express_1.default.Router();
router.post('/', postController_1.createPost);
router.get('/', postController_1.getPosts);
router.get('/:postId', postController_1.getPostById);
router.put('/:postId', postController_1.updatePost);
router.delete('/:postId', postController_1.deletePost);
exports.default = router;
