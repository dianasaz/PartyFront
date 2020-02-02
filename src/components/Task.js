import React from 'react';
import './task.css';
import CommonRequests from '../requests/commonRequests';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null,
      id: null,
      color: null,
    }
  }

  componentDidMount() {
    var green = '#B7F46E';
    var yellow = '#FFAA73';
    if (this.props.status == "READY") this.setState({color: green})
    else  this.setState({color: yellow});
  }

  // componentWillUpdate() {
  //   var green = '#B7F46E';
  //   var yellow = '#FFAA73';
  //   if (this.props.status == "READY") this.setState({color: green})
  //   else  this.setState({color: yellow});
	// }

  render() {
    return (
      <div>
        <div className="task note m-3" style={{background: this.state.color}} onClick={this.props.onClick} id="task">
          <div className="d-flex justify-content-center">
            <h3>{this.props.product}</h3>
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            <p>Party : {this.props.party}</p>
          </div>
          {/* <div className="d-flex justify-content-center">
            <p>Product : {this.props.product}</p>
          </div> */}
          <div className="d-flex justify-content-center">
            <p>Amount : {this.props.kol} {this.props.measure}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            <p>{this.props.status} {this.props.id}</p>
          </div>
          <div className="d-flex justify-content-center">
             <a onClick={() => {
                            CommonRequests.deleteTask(this.props.id);
                        }}> delete </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
