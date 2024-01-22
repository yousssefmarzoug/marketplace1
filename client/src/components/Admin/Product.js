import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../lib/state/actions";

const Product = ({ id, name, price, category }) => {
  const dispatch = useDispatch();
  const addToCartAction = () => dispatch(addToCart({ id, name, price }));
  return (


<div class="container text-center">
  <div class="row border border-5 text-center">
    <div class="col">
    <img src={`images/items/${id}.jpg`} alt={`Product ${id}`} className="img-fluid" class="img-thumbnail"  />{" "}

    </div>
    <div class="col text-center  border border-5 py-5 px-2" >
    <a href="#" className="text-muted">
            {category}
          </a>
    </div>
    <div class="col  border border-5 py-5 px-2">
    <a href="#" className="title">
            {name}
          </a>
    </div>
    <div class="col  border border-5 py-5 px-2">
    <a href="#" className="title">
            {price}
          </a>
    </div>
  </div>
</div>

  );
};
export default Product;
