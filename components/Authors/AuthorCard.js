export function AuthorCard({author}){
    return(
        <div class="row position-sticky" style={{top:"10%"}}>
        <div class="col-md-12 text-center">
            <div class="profile-img"><img src={author.imageSrc} class="img-thumbnail border-0 bg-transparent"/></div>
        </div>
        <div class="col-md-12 text-center">
            <h2 className="fs-6">{author.name}</h2>
        </div>
        <div class="col-md-12 text-center">
             <span class="author-tag">{author.profession}</span>
        </div>
        <div class="col-md-12 text-center">
             <span class="author-tag">{author.about}</span>
        </div>
    </div>
    )

}