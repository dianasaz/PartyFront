import React from 'react';
import { DatePicker, DatePickerInput } from 'rc-datepicker'; import { Component } from 'react';
import CommonRequests from '../../requests/commonRequests';
import './PartyTabs.css';
import Product from '../Product';
import 'moment/locale/ru.js';
import 'rc-datepicker/lib/style.css';

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

    nameChange(event) {
        this.setState({ name: event.target.value })
    }

    addressChange(event) {
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
            <div className="col-8">

                <form className="form-horizontal mt-3" method="post">
                    <div className="form-group">
                        <label className="control-label col-2" >Name:</label>
                        <div className="col-12">
                            <input type="text" className="form-control" id="name" onChange={this.nameChange.bind(this)} placeholder="Enter name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-2" >Address:</label>
                        <div className="col-12">
                            <input type="text" className="form-control" id="address" onChange={this.addressChange.bind(this)} placeholder="Enter address" />
                        </div>
                    </div>
                    <div className="from-group">
                        <label className="col-12">Select date:</label>
                        <div
                            className="col-4"
                        >
                            <DatePickerInput
                                onChange={this.dateChange.bind(this)}
                                // value={new Date()}
                                className='my-custom-datepicker-component'
                            />

                            {/* <DatePicker 
                            onChange={this.} 
                            value={new Date()}
                             />                        */}
                            </div>
                    </div>

                    <div className="form-group">
                        <div className="col-12 mt-3">
                            <a onClick={() => {
                                CommonRequests.addParty(this.state.name, this.state.address, this.state.date)
                                    .then(res => {
                                        CommonRequests.addUserToParty(res.id, localStorage.getItem("user"))
                                    })
                                window.location.assign('/parties');
                            }}><button type="button" className="btn btn-outline-primary">Add</button> </a>                        </div>
                    </div>
                </form>
            </div >
        );
    }
}
export default AddParty;
