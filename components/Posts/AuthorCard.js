
export default function AuthorCard({data}){
    console.log(data)
    return(
        <a href={"../authors/" + data.link} >
            <div class="author">
                <div class="author-img"><img src={data.imageSrc} class="img-thumbnail border-0 rounded-0 bg-transparent"/></div>
                <div class="author-meta">
                    <span class="author-name">{data.name}</span>
                    <span class="author-tag">{data.profession}</span>
                </div>
            </div>
        </a>
  
    )
}