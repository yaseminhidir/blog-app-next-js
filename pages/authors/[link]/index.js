
import { AuthorCard } from "../../../components/Authors/AuthorCard";
import PostCard from "../../../components/Authors/PostCard";
import Layout from "../../../components/layout";
import authorService from "../../../services/authorService";

import postService from "../../../services/postService";


export default function Author({ posts, author }) {
    return (
        <Layout>
            <div className="container mt-5">
            <div className="row">
                <div className="col-md-9">
                <div className="card bg-transparent border-0">
                    <div className="card-header bg-transparent text-center">
                    <h2>{author.name}</h2>  
                    </div>
                    <div className="card-body">
                    <div className="row">{
                        posts.map((post) => (
                            <div className="col-md-12">
                                <PostCard data={post}></PostCard>
                            </div>
                        ))
                    }
                    </div>
                </div>
                    
                    </div>
                </div>
                <div className="col-md-3">
                    <AuthorCard author={author}></AuthorCard>
                </div>
            </div>
            </div>
           
        </Layout>

    )
}

export function getServerSideProps(context) {
    var link = context.params.link;
    var author = authorService.getAuthorByLink(link)
    var posts = postService.getPostsByAuthorId(author.id);

console.log(author)

    return {
        props: {
            posts: posts,
            author: author
        }
    }
}




