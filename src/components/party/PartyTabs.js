import React from 'react';
import { Component } from 'react';
import CommonRequests from '../../requests/commonRequests';
import './PartyTabs.css';
import Product from '../Product';
import AddProduct from '../AddProduct';
import Task from '../Task';

class PartyTabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			party: null,
			products: null,
			users: null,
			tasks: null,
			price: null,
			task_id: null,
		}
	}

	componentDidMount() {
		CommonRequests.getParty(this.props.partyId)
			.then(res => {
				CommonRequests.getProductsForParty(this.props.partyId)
					.then(result => {
						CommonRequests.getUsersOfThisParty(this.props.partyId)
							.then(arr => {
								CommonRequests.getTasksByPartyAndUser(this.props.partyId, localStorage.getItem("user"))
									// CommonRequests.getTasksForUser(localStorage.getItem("user"))

									.then(tasksArr => {
										this.setState({ party: res, products: result, users: arr, tasks: tasksArr });
									})
							})
					})
			});
	}

	componentWillUpdate() {
		CommonRequests.getProductsForParty(this.props.partyId)
			.then(result => {
				CommonRequests.getTasksByPartyAndUser(this.props.partyId, localStorage.getItem("user"))
				// CommonRequests.getTasksForUser(localStorage.getItem("user"))

				.then(tasksArr => {
					this.setState({products: result, tasks: tasksArr });
				})
			})
	}

	getArr(arr) {
		if (arr) {
			return arr.map((el) => <Product name={el.name} id={el.id} measure={el.measure} party={this.state.party.id} price={el.price} />);
		}
	}

	getPeople(arr) {
		if (arr) {
			return arr.map((el) => {
				return <div className="people note">
					<h5>
						Login: {el.login}
					</h5>
				</div>
			});
		}
	}

	getTasks(arr) {
		if (arr) {
			return arr.map((el) => {
				return <div data-toggle="modal" data-target="#exampleModal1">
					<Task onClick={() => this.handleClick(el.id)} party={el.party.name} id={el.id} product={el.product.name} kol={el.kol} money={el.money} status={el.status} measure={el.product.measure} />
				</div>
			});

		}
	}

	priceChange(event) {
		this.setState({ price: event.target.value });
	}

	formatDate(date) {
		if (date != null) {
			var monthNames = [
				"January", "February", "March",
				"April", "May", "June", "July",
				"August", "September", "October",
				"November", "December"
			];

			var day = date.getDate();
			var monthIndex = date.getMonth();
			var year = date.getFullYear();

			return day + ' ' + monthNames[monthIndex] + ' ' + year;
		}
	}

	onclick(inputPrice) {
		CommonRequests.addMoneyToTask(this.state.task_id, inputPrice);
	}

	handleClick(inputTask) {
		//('#exampleModal').modal('show');
		// 
		this.setState({ task_id: inputTask });
	}


	render() {
		if (this.state.party != null) {
			var { products } = this.state;
			var { address } = this.state.party;
			var { date } = this.state.party;
			if (this.state != null) {
				var { users } = this.state;
				var { tasks } = this.state;
			}
		}
		return (
			<div className="col-12">
				<section id="tabs">
					<div className="row">
						<div className="col-12 ">
							<nav>
								<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
									<a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Products</a>
									<a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Info</a>
									<a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">People</a>
									<a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false"> My tasks</a>
								</div>
							</nav>
							<div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
								<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
									<div id="products" className="container">
										<div className="row">
											{this.getArr(products)}
											<AddProduct party={this.props.partyId} />
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
									<div className="people note">
										<h5>
											Address: {address}
										</h5>
										<h5>
											Date: {this.formatDate(new Date(date))}
										</h5>
									</div>
								</div>
								<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
									{this.getPeople(users)}
								</div>
								<div className="tab-pane fade" id="nav-about"  role="tabpanel" aria-labelledby="nav-about-tab">
									<div className="row">
										{this.getTasks(tasks)}

										<div className="modal fade" id="exampleModal1" tabindex="1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" show="true">
											<div className="modal-dialog" role="document">
												<div className="modal-content">
													<div className="modal-header">
														<h5 className="modal-title" id="exampleModalLabel">Is this task ready? {this.props.id}</h5>
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
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
export default PartyTabs;


