import React from 'react';
import './product.css';
import CommonRequests from '../requests/commonRequests';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: null,
        }
    }

    componentDidMount() {
        {
            CommonRequests.getCountOfProductsForParty(this.props.party, this.props.id)
            .then(res => {
                this.setState({ count: res });
            })
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div className="product col-md-4">
                <div className="d-flex justify-content-center">
                    <h4>{this.props.name}</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <p>Price : {this.props.price}</p>
                </div>
                <div className="d-flex justify-content-around align-content-center">
                    <div>
                        <h5 onClick={() => {
                            CommonRequests.addProductForParty(this.props.party, this.props.id);
                            this.setState({ count: this.state.count + 1 });
                        }}>
                            <button type="button" className="btn btn-outline-light">+</button> </h5>
                    </div>
                    <div>
                        <div className="btn text-light">
                            {this.state.count}
                        </div>
                    </div>
                    <div>
                        <a onClick={() => {
                            CommonRequests.deleteProductForParty(this.props.party, this.props.id);
                            this.setState({ count: this.state.count - 1 });
                        }}>
                            <button type="button" className="btn btn-outline-light">-</button> </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
