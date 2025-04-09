import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { PanierLengthProps } from "../types";

export default function Navbar({PanierLength}: PanierLengthProps) {

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
  <Link className="navbar-brand" to="#">Navbar</Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="#">Accueil</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/produits">Produits</Link> 
        </li>
        <li className="nav-item">
        <Link to="/new" className="nav-link" aria-disabled="true">Nouveau</Link> 
        </li>
      </ul>

      <Link to="/panier"  className="btn btn-primary position-relative">
      <CiShoppingCart />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {PanierLength}
    <span className="visually-hidden">unread messages</span>
  </span>
</Link>
    </div>
  </div>
</nav>
    )
}