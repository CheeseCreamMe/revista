import {Outlet,Link} from "react-router-dom"
import Footer from "./assets/pages/footer";
function  NavigationBar(){
return <>
    <nav className="Nav FixedTop p ">
        <div className="Logo ">
            <h1 className="tittle">
                Revista
            </h1>
        </div>
        <ul className="nav-links">
            <Link to="Home" className="nav-link"> <div className="nav-url">Inicio  </div> </Link>
            <Link to="Events"className="nav-link"> <div className="nav-url">Eventos </div> </Link>
            <Link to="News"className="nav-link"> <div className="nav-url">Noticias</div> </Link>
            <Link to="Images"className="nav-link"> <div className="nav-url">Imagenes</div> </Link>
        </ul>
    </nav>
    <div className="espacio">

    </div>
    <Outlet/>
    <Footer/>
</>;
}
export default NavigationBar