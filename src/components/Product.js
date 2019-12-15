import React from 'react';
import './party/PartyTabs.css'

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="product col-md-4 btn-info">
                <div className="d-flex justify-content-center">
                    <h4>{this.props.name}</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <p>Price : {this.props.price}</p>
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
}

export default Product;
