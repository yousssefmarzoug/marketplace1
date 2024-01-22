import React from "react";
import Gallery from "./Gallery";



const Ajouter = ({ history }) => {
  return (
    <div className="card mx-auto" style={{ maxWidth: "100%", marginTop: "140px" }}>
      <article className="card-body">
        <header className="mb-4">
          <h4 className="card-title">Ajouter un produit</h4>
        </header>
        {/* Feedback et messages d'erreur */}
        <form action="/api/products/add" method="POST" encType="multipart/form-data" className="row g-3">
          <div className="col-md-3">
            <div className="form-group">
              <label>id</label>
              <input type="number" className="form-control" name="prix" placeholder="Prix" required min="0" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Catégorie</label>
              <input type="text" className="form-control" name="categorie" placeholder="Catégorie" required />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Nom du produit</label>
              <input type="text" className="form-control" name="nom" placeholder="Nom du produit" required />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Prix</label>
              <input type="number" className="form-control" name="prix" placeholder="Prix" required min="0" step="0.01" />
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Ajouter le produit</button>
          </div>
        </form>
      </article>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container" style={{ marginTop: "130px" }}>
      {/* Content here */}

      <Ajouter />
      <Gallery />
    </div>
  );
};
export default Home;
