

export function PostCard({post}){
    return(
       
        <a href={"./posts/" + post.link} >
          <div className="article-card">
            <div className="article-img">
              <img src={post.imageSrc} class="img-thumbnail border-0 rounded-0 bg-transparent" alt="image-1"/>
            </div>
            <div className="article-meta text-left">
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
            </div>
          </div>
        </a>
 
    )
}