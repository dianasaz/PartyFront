import React from 'react';
import './task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task col-md-4 bg-success">
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

    );
  }
}

export default Task;
