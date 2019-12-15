import React from 'react';
import Party from './Party';
import Button from './ButtonAddParty';
import { Component } from 'react';
import CommonRequests from '../../requests/commonRequests';

class Parties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: null,
    }
  }

  componentDidMount() {
    CommonRequests.getParties()
      .then(res => {
        this.setState({ parties: res})
      });
  }

  getArr(arr) {
    if (arr) {
      return arr.map((el) => <Party name={el.name} address={el.address} date={el.date} id={el.id}/>);
    }
  }

  render() {
    if (this.state.parties){
			var {parties} = this.state;
		}
    return (
      <div className="fluid-container col-10">
        <Button />
        {this.getArr(parties)}
      </div>
    );
  }
}

export default Parties;
