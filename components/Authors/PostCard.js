

export default function PostCard({data}){
    return(
        <a href={"/posts/" + data.link}  className="text-dark">
        <div class="container mt-3" >
            <div class="row justify-content-end  mb-5">
                <div class="col-lg-3" >
                    <div >
                        <img src={data.imageSrc} className="img-thumbnail border-0 rounded-5 bg-transparent w-100" style={{objectFit:"cover" , height:"100px"}}/>
                    </div>
                </div>
                <div class="col-lg-9 d-flex align-items-center">
                    <div>
                        <h5 >{data.title}</h5>
                        <p mb-0>{data.summary}</p>
                    </div>
                </div>
            </div>
        </div>
        </a>
    )
}

