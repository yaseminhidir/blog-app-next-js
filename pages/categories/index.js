import Headline from "../../components/Authors/Headline";
import { Category } from "../../components/Categories/Category";
import Layout from "../../components/layout";
import categoryService from "../../services/categoryService"
import postService from "../../services/postService";


export default function Categories({ categories }) {
    var data = {
        imageSrc: "/images/blogging.jpg",
        title: "Discover something new on our Categories page!",
    }
    return (
        <Layout>
              <Headline data={data}> </Headline>
            <div>
                <Category categories={categories}></Category>
            </div>
        </Layout>

    )
}

export function getServerSideProps() {
    var categories = categoryService.getCategories();
    for (const category of categories) {
        var posts = postService.getPostsByCategoryId(category.id);
        category.posts = posts;
    }

    return {
        props: {
            categories: categories,
        }
    }

}

