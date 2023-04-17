import fs from "fs";
import authorService from "./authorService";

export default {
    getPostList() {
        var posts = JSON.parse(fs.readFileSync('./data/posts.json', 'utf8'));
        for (const post of posts) {
           var author= authorService.getAuthorById(post.authorId);
           if(author){
            post.author=author
           }

        }
        return posts
    },
    getPostById(id) {
        var list = this.getPostList();
        var post = list.filter(x => x.link == id)[0];
        return post
    },
    getPostContentById(id) {
        var post = this.getPostById(id);
        console.log(post)
        var contentPath = post.contentPath;
        var content = fs.readFileSync(contentPath, 'utf8')
        return content
    },
    getPostsByAuthorId(id){
        var posts=this.getPostList();
        var postsByAuthor=posts.filter(x=>x.authorId==id);
        return postsByAuthor
    },
    getPostsByCategoryId(id){
        var posts=this.getPostList();
        var postsByCategory=posts.filter(x=>x.categoryId==id);
        return postsByCategory
    }
}