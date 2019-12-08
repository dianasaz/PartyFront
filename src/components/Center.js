import React from 'react';
import { Component } from 'react';
import common_requests from '../requests/commonRequests';

class Center extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [common_requests.getAction()]
		}
	}

	// componentDidMount() {
	// 	const a = commonRequests.getAction();
	// 	this.setState(a)
	// }

	render() {
		const {data} =  this.state;
		console.log(data);
		 return (
		 		//  <div className="col-md-6 col-lg-8">
					
		 		// </div>
				<div class="row d-flex col-lg-8">
					<div class="row d-flex col-lg-12">
						<div class="border flex-column col-lg-6">
						<div class="border">
							{/* {data.map(data =>
								<div class="m-2 p-2" key={data.id}>
									<h1>{data.id} : {data.login}</h1>
								</div>
							)} */}
							<h1>Products</h1>
							<h3>Pesto</h3>
							<h3>Chocolate</h3>
							<h3>Cheese</h3>
						</div> 
						<div class="border">
							<p>update delete</p>
						</div>      
						</div>
						<div class="border col-lg-6">
							<h1>Info</h1>
							<h3>Address</h3>
							<h3>Date</h3>
							<h3>People</h3>
						</div>
					</div>
					<div class="row d-flex col-lg-12">
					<div class="border col-lg-6">
							<h1>People</h1>
							<h3>Vadim</h3>
							<h3>Julia</h3>
							<h3>Misha</h3>
						</div>
						<div class="border col-lg-6">
							<h1>Tasks</h1>
							<h3>1</h3>
							<h3>2</h3>
							<h3>3</h3>
						</div>
					</div>
				</div>
		);
	}
}
export default Center;
