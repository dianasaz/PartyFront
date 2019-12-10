import React from 'react';
import './party.css';

function Party() {
    return (
    <div className="party" id="party">
      <div>
        <h2>Party Name</h2>
        <div className="row">
          <div className="col-6"> 
            <p> Address: </p> 
            <p> Date : </p>
          </div>
          <div className="col-6 d-flex justify-content-end"> 
          <button type="button" className="btn btn-success align-self-center">Join</button>
          </div>
        </div>
        <div className="progress" >
          <div className="bar" style={{width : '40%', background: 'grey'}}></div>
       </div>
      </div>
    </div>
  );
}

export default Party;
