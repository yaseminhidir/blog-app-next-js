
export default function Headline({data}){
    return(
        <div class="container" id="hero">
            <div class="row justify-content-end">
                <div class="col-lg-6 hero-img-container">
                        <div class="hero-img">
                            <img src={data.imageSrc} class="img-thumbnail border-0 rounded-0 bg-transparent h-100" style={{objectFit:"cover"}} />
                        </div>
                </div>
                <div class="col-lg-9">
                    <div class="hero-title">
                            <h1>{data.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}