import React from 'react';
import Party from './Parties';
import Left from '../LeftColumn'

function PartiesPage() {
  return (
    <div className="row">
      <Left />
      <Party />
    </div>
  );
}

export default PartiesPage;
