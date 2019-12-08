import React from 'react';
import { Component } from 'react';
import common_requests from '../requests/commonRequests';
import './Center.css';
import product from './Product'

class Center extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [common_requests.getAction()]
		}
	}

	products() {
		const arr = [1, 2, 3];
		return arr.map((number) =>
			product()
		);
	}
	render() {
		const { data } = this.state;
		console.log(data);
		return (
			<div className="col-md-9 col-lg-10">
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
											{this.products()}
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
									info
								</div>
								<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
									people
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
export default Center;
