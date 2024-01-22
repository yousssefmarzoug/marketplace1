import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import Pagination from "./Pagination";
import { fetchProducts } from "../../lib/state/actions";

const Results = ({ items, pageIndex }) =>
  !!items.length &&
  items[pageIndex].map((product) => <Product key={product.id} {...product} />);



const Gallery = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => ({ ...state.products }));
  const { items } = state;

  // fetch products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <section className="mt-3 mb-5">
        <header className="section-heading mb-5">
          <h3 className="title-section">Products</h3>
        </header>
        <div className="col">
          <Results {...state} />
        </div>
        <div className="clearfix"></div>
      </section>
      <Pagination />
    </>
  );
};
export default Gallery;
