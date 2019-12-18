import React from 'react';
import './addProduct.css';
import './product.css';
import Img from '../plus.png';
import CommonRequests from '../requests/commonRequests';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            types: null,
            name: null,
            price: null,
            measure: null,
        }
    }

    componentDidMount() {
        CommonRequests.getTypes()
            .then(res => {
                this.setState({ types: res });
            })
        if (localStorage.getItem("user") != null)
        document.getElementById("plus").disabled = false
        else document.getElementById("plus").disabled = true

    }

    getTypes(arr) {
        if (arr) {
            return arr.map((el) => {
                return <option value={el.id}>{el.value}</option>
            });
        }
        // JSON.stringify(el)
    }

    priceChange(event) {
        this.setState({ price: event.target.value })
    }

    nameChange(event) {
        this.setState({ name: event.target.value })
    }

    measureChange(event) {
        this.setState({ measure: event.target.value })
    }

    typeChange(event) {
        CommonRequests.getType(event.target.value)
            .then(res => {
                this.setState({ type: res })
            })
    }

    onclick(inputName, inputPrice, inputType, inputMeasure) {
        CommonRequests.addProduct(inputName, inputPrice, inputType, inputMeasure)
            .then(res => {
                CommonRequests.addProductForParty(this.props.party, res.id);
            });
        document.getElementById("name").innerText = "";
    }

    render() {
        if (this.state != null) {
            var { types } = this.state;
        }
        return (
            <div>
                <div  className="product col-md-4" data-toggle="modal" data-target="#exampleModal">
                    <img src={Img} className='image' />
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New product</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="recipient-name" className="col-form-label">Name:</label>
                                        <input type="text" id="name" className="form-control" onChange={this.nameChange.bind(this)} placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message-text" class="col-form-label">Price:</label>
                                        <input type="text" className="form-control" onChange={this.priceChange.bind(this)} placeholder="Price" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message-text" class="col-form-label">Measure:</label>
                                        <input type="text" className="form-control" onChange={this.measureChange.bind(this)} placeholder="Measure" />
                                    </div>
                                    <div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="inputGroupSelect01">Type:</label>
                                            </div>
                                            <select onInput={this.typeChange.bind(this)} class="custom-select" id="inputGroupSelect01">
                                                <option selected > Choose... </option>
                                                {this.getTypes(types)}
                                            </select>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" id="plus" data-dismiss="modal" onClick={(e) => this.onclick(this.state.name, this.state.price, this.state.type, this.state.measure)} className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AddProduct;
