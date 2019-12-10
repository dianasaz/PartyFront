import React from 'react';
import PartyTabs from './PartyTabs';
import Left from '../LeftColumn'

function PartyContent() {
  return (
    <div className="row">
      <Left />
      <PartyTabs />
    </div>
  );
}

export default PartyContent;
