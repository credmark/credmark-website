import { getAllPosts } from "../../lib/api";

export default async function getPosts(req, res){
    const data = await getAllPosts();
    res.status(200).json(data);
}