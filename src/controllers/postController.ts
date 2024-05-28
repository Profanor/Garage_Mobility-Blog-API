import { Response, Request } from 'express';
import Post from '../models/Posts';

// Create a blog post
export const createPost = async (req: Request, res: Response) => {
    try {
        const { title, content, author } = req.body;

        //input validation check for empty fields
        if (!title || !content || !author) {
            return res.status(400).json({ error: 'All fields are required'});
        }
        const newPost = new Post({ title, content, author });
        await newPost.save();
        return res.status(201).json( { message: 'Your post was created successfully', newPost });

    }   catch(error) {
        console.error('An error occured while trying to create that post:', error);
        return res.status(500).json({ error: 'Internal server error '})
    }
};

