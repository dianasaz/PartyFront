import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container justify-content-center col-10 bg-secondary border" >
        <div > Hello,
         {/* {this.props.name} */}
         </div>
      </div>
    );
  }
}

export default Profile;
