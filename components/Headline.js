import Image from "next/image";
import AuthorCard from "./Posts/AuthorCard";

export default function Headline({data}){
    return(
        <div class="container" id="hero">
            <div class="row justify-content-end">
                <div class="col-lg-6 hero-img-container">
                    <a href={"./posts/" + data.link}>
                        <div class="hero-img">
                            <img src={data.imageSrc} class="img-thumbnail border-0 rounded-0 bg-transparent" />
                        </div>
                    </a>
                </div>
                <div class="col-lg-9">
                    <div class="hero-title">
                        <a href={"./posts/" + data.link}>
                            <h1>{data.title}</h1>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="hero-meta">
                        <p>{data.summary}</p>
                        <AuthorCard data={data.author}></AuthorCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

