import { useRouter } from "next/router";
import Headline from "../../../components/Headline";
import postService from "../../../services/postService";
import Layout from "/components/layout";


export default function Post({ post, content }) {

  return (
    <Layout>
      <Headline data={post}></Headline>
      <div dangerouslySetInnerHTML={{ __html:content  }}></div>
    </Layout>
  )
}

export function getServerSideProps(context) {
  var link = context.params.link;
  var post = postService.getPostById(link);
  var content=postService.getPostContentById(link)
  return {
    props: { post, content }
  }
}