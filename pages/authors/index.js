
import AuthorCard from "../../components/Posts/AuthorCard";
import Headline from "../../components/Authors/Headline";
import Layout from "../../components/layout";
import authorService from "../../services/authorService";

export default function Authors({ authors }) {
    var data = {
        imageSrc: "/images/blogging.jpg",
        title: "\"Meet Our Talented Team of Blog Authors\"",
    }
    return (
        <Layout>
            <Headline data={data}> </Headline>
            <div className="container">
                <div className="row">
                    {
                        authors.map((author, index) => (
                            <div className="col-md-4 mb-4">
                                <AuthorCard data={author} key={index}></AuthorCard>
                            </div>

                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export function getServerSideProps() {
    var authors = authorService.getAuthors();
    return {
        props: {
            authors: authors
        }
    }
}