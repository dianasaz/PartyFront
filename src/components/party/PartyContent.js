import React from 'react';
import PartyTabs from './PartyTabs';
import Left from '../LeftColumn'

function PartyContent(props) {

  function showContent(){
    if (!isNaN(props.match.params.id)) {
     return (<div className="row">
        <PartyTabs partyId={props.match.params.id}/>
        </div>
     )
    };
    return null;
  }

  return (
    <>
      {showContent()}
    </>
  );
}

export default PartyContent;
