import React from 'react';
import './task.css';
import CommonRequests from '../requests/commonRequests';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null,
    }
  }

  priceChange(event) {
    this.setState({ price: event.target.value })
  }

  onclick(inputPrice) {
    CommonRequests.addMoneyToTask(this.props.id, inputPrice);
}

  render() {
    return (
      <div>
        <div className="task col-md-4 bg-warning" data-toggle="modal" data-target="#exampleModal">
          <div className="d-flex justify-content-center">
            <h3>TASK</h3>
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            <p>Party : {this.props.party}</p>
          </div>
          <div className="d-flex justify-content-center">
            <p>Product : {this.props.product}</p>
          </div>
          <div className="d-flex justify-content-center">
            <p>Amount : {this.props.kol}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            <p>{this.props.status}</p>
          </div>
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Is this task ready?</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">Put the count of money that you spent:</label>
                    <input type="text" id="name" className="form-control" onChange={this.priceChange.bind(this)} placeholder="Money" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="plus" data-dismiss="modal" onClick={(e) => this.onclick(this.state.price)} className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
