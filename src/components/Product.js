import React from 'react';
import './party/PartyTabs.css'

function Product() {
  return (
    <div className="product col-md-4 btn-info">
    <div className="d-flex justify-content-center">
        <h4>Apple</h4>
    </div>
    <div className="d-flex justify-content-center">
        <p>price</p>
    </div>
    <div className="d-flex justify-content-around">
        <div>
            +
        </div>
        <div>
            5
        </div>
        <div>
            -
        </div>
    </div>
</div>
  );
}

export default Product;
