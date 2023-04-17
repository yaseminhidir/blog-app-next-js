import Image from "next/image"
export default function Footer() {
    return (
        <footer class="container-fluid mt-1 p-4 footer">
            <div class="container ">
                <div class="row pb-1">
                    <div class="col-lg-3 col-md-12"><img src="/images/logo.png" class="img-thumbnail border-0 rounded-0 bg-transparent" /></div>
                    <div class="col-lg-6 col-md-12">
                        <ul class="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" href="/posts">Readings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/authors">People</a>
                            </li>
        
                            <li class="nav-item">
                                <a className="nav-link" href="/categories">Categories</a>
                            </li>
                         
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link active btn btn-light" href="#"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active btn btn-light" href="#"><i class="fab fa-google"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active btn btn-light" href="#"><i class="fab fa-twitter"></i></a>
                            </li>
                        </ul>

                    </div>
                </div>

                <div class="row pt-2">
                    <div class="col-lg-12 text-center">
                        <span>&copy <a href="">NewToDesign.com</a> All Rights Received.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}