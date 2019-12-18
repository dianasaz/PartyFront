import React from 'react';
import { DatePicker } from '@y0c/react-datepicker';
import { Component } from 'react';
import CommonRequests from '../../requests/commonRequests';
import './PartyTabs.css';
import Product from '../Product';

class AddParty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: null,
            date: null,
            name: null,
        }
    }

    dateChange = (date) => {
        this.setState({ date: date })
    }

    nameChange(event){
        this.setState({ name: event.target.value })
    }

    addressChange(event){
        this.setState({ address: event.target.value })
    }

    render() {
        if (this.state.name != null && this.state.address != null && this.state.address != null) {
            var { date } = this.state;
            var { name } = this.state;
            var { address } = this.state;
            console.log(date, name, address);
        }
        return (
            <div className=" col-10 m-l-5">

                <form className="form-horizontal" method="post">
                    <div className="form-group">
                        <label className="control-label col-2" >Name:</label>
                        <div className="col-10">
                            <input type="text" className="form-control" id="name" onChange={this.nameChange.bind(this)} placeholder="Enter name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-2" >Address:</label>
                        <div className="col-10">
                            <input type="text" className="form-control" id="address" onChange={this.addressChange.bind(this)} placeholder="Enter address" />
                        </div>
                    </div>
                    <div className="from-group">
                        <label className="col-10">Select date:</label>
                        <div 
                            className="col-10" 
                        >
                            <DatePicker showDefaultIcon clear onChange={this.dateChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-offset-2 col-10 m-3">
                        <a onClick={() => {
                            CommonRequests.addParty(this.state.name, this.state.address, this.state.date)
                            .then (res => {
                                    CommonRequests.addUserToParty(res.id, localStorage.getItem("user"))
                            })
                         window.location.assign('/parties');}}><button type="button" className="btn btn-outline-primary">Add</button> </a>                        </div>
                    </div>
                </form>
            </div >
        );
    }
}
export default AddParty;
