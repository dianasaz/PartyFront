import React from 'react';
import './product.css';
import CommonRequests from '../requests/commonRequests';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: null,
            task: null,
        }
    }

    componentDidMount() {

        CommonRequests.getCountOfProductsForParty(this.props.party, this.props.id)
            .then(res => {
                CommonRequests.checkTask(this.props.party, this.props.id)
                    .then(result => {
                        this.setState({ count: res, task: result });
                    })
            });
    }

    addButton() {

        if (this.state.task != null) return null;
        else
            return (
                <strong className="takeTask" onClick={() => {
                    CommonRequests.getProduct(this.props.id)
                        .then(res => {
                            CommonRequests.getUser(localStorage.getItem("user"))
                                .then(user => {
                                    CommonRequests.getParty(this.props.party)
                                        .then(party => {
                                            CommonRequests.takeTask(party, res, user, this.state.count);
                                        })
                                })
                        })
                }}>Take task</strong>
            );

    }


    render() {
        return (
            <div className="product col-md-4">
                <div className="d-flex justify-content-center mt-3">
                    <h4>{this.props.name}</h4>
                </div>
                <hr />
                <div className="d-flex justify-content-center">
                    <p>Price : {this.props.price}</p>
                </div>
                <div className="d-flex justify-content-around align-content-center">
                    <div>
                        <h5 onClick={() => {
                            CommonRequests.addProductForParty(this.props.party, this.props.id);
                            this.setState({ count: this.state.count + 1 });
                        }}>
                            <button type="button" className="btn btn-outline-dark">+</button> </h5>
                    </div>
                    <div>
                        <div className="btn text-dark">
                            {this.state.count} {this.props.measure}
                        </div>
                    </div>
                    <div>
                        <a onClick={() => {
                            CommonRequests.deleteProductForParty(this.props.party, this.props.id);
                            this.setState({ count: this.state.count - 1 });
                        }}>
                            <button type="button" className="btn btn-outline-dark">-</button> </a>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-center">
                    {this.addButton()}
                </div>
            </div>
        );
    }
}

export default Product;
