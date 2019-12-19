import React from 'react';
import Profile from './Profile';
import Left from '../LeftColumn';
import CommonRequests from '../../requests/commonRequests';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
 
  }


  render() {
 
    return (
      <div className="row">
        <Profile/>
      </div>
    );
  }
}

export default ProfilePage;
