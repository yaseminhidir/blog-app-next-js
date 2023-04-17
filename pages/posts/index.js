import Headline from "../../components/Headline";
import Layout from "../../components/layout";
import postService from "../../services/postService";
import { PostCard } from "../../components/Posts/PostCard";


export default function FirstPost({ posts, randomPost }) {
 
  return (
    <Layout>
      <Headline data={randomPost}></Headline>
      <div className="container mt-2 mb-2 pt-5 pb-5" id="article-grid">
        <div className="row justify-content-center">
          {
            posts.map((post,index) => (
              <div className="col-xl-6 col-lg-12 text-center" >
              <PostCard post={post} key={index}></PostCard>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}


export function getServerSideProps() {
  var posts=postService.getPostList()
  return {
    props: {
      posts:posts ,
      randomPost: posts[Math.floor(Math.random()*posts.length)]
    },
  }

}
