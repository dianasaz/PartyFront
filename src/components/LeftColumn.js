import React from 'react';

function LeftColumn() {
  return (
    <div className = "col-md-3 col-lg-2">
                <div className ="d-flex flex-column m-1 p-1">
                    <div className=" m-1 pl-5 pr-5">
                        <h1>left 1</h1>  
                    </div>
                    <div className=" m-1 pl-5 pr-5">
                        <h1>left 2</h1>
                    </div>
                    <div className=" m-1 pl-5 pr-5">
                        <h1>left 3</h1>
                    </div>
                </div>
            </div>
  );
}

export default LeftColumn;
