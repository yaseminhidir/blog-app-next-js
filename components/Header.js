
import Image from "next/image";
export default function Header(){
    return(
        <div className="container-fluid header">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/"><img src="/images/logo.png" class="img-thumbnail border-0 rounded-0 bg-transparent"/> </a>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/posts">Readings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/authors">People</a>
                            </li>
        
                            <li className="nav-item">
                            <a className="nav-link" href="/categories">Categories</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
   
  
}