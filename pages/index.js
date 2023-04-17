
import Image from 'next/image';


import Headline from '../components/Headline';
import Layout from '../components/layout';
import postService from '../services/postService';
import { PostCard } from '../components/Posts/PostCard';


export default function Home({ posts,randomPost }) {
  return (
    <Layout>
       <Headline data={randomPost}></Headline>
      <div className="container mt-2 mb-2 pt-5 pb-5" id="article-grid">
        <div className="row justify-content-center">
          {
            posts.map((post, index) => (
              <PostCard post={post} key={index}></PostCard>
            ))
          }
        </div>
        <div class="container text-center pb-3 mb-5">
          <a href="/posts" class="btn btn-lg btn-light">More Articles</a>
        </div>
      </div>
    </Layout>

  )
}
export function getServerSideProps() {
  var posts=postService.getPostList()
  return {
    props: {
      posts: postService.getPostList().slice(0,2),
      randomPost: posts[Math.floor(Math.random()*posts.length)]
    },
  }
}
