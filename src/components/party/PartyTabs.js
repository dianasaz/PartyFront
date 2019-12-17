import React from 'react';
import { Component } from 'react';
import CommonRequests from '../../requests/commonRequests';
import './PartyTabs.css';
import Product from '../Product';
import AddProduct from '../AddProduct';

class PartyTabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			party: null,
			products: null,
		}
	}

	componentDidMount() {
		console.log(this.props);
		// const { match: { params } } = this.props;

		CommonRequests.getParty(this.props.partyId)
			.then(res => {
				CommonRequests.getProductsForParty(this.props.partyId)
					.then(result => {
						// CommonRequests.getUsersOfThisParty(this.props.partyId)
						// .then(arr => {
						this.setState({ party: res, products: result });
						// })
					})
			});
			if (localStorage.getItem("user") != null) document.getElementById("invite").disabled = false;
			else document.getElementById("invite").disabled = true;
	}

	getArr(arr) {
		if (arr) {
			return arr.map((el) => <Product name={el.name} id={el.id} measure={el.measure} party={this.state.party.id} price={el.price} />);

		}
	}

	getPeople(arr) {
		if (arr) {
			return arr.map((el) => {
				return <p>{el.login}</p>
			});
		}
	}

	render() {
		if (this.state.party != null) {
			var { products } = this.state;
			var { address } = this.state.party;
			var { date } = this.state.party;
			var { users } = this.state.party;
		}
		return (
			<div className="col-10">
				<section id="tabs">
					<div className="row">
						<div className="col-12 ">
							<nav>
								<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
									<a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Products</a>
									<a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Info</a>
									<a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">People</a>
									<a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Tasks</a>
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
									<p>Address: {address}</p>
									<p>Date: {date}</p>
								</div>
								<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
									<button id="invite" type="button" className="btn btn-outline-primary">
										Invite your friend
									</button>
									{this.getPeople(users)}
								</div>
								<div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
									tasks
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


