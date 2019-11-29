import React from "react";

export default props => {

  function clickThis()
  {
    alert("this also clicked");
  }

//When need more event click on same button click
  return(
  <button onClick={(event) => {clickThis(); props.clickEvent()}}> Click Me! </button>);
};

//This syntx when () used no return is required.
// export default props => (
//   <button onClick={props.clickEvent}> Click Me! </button>
//   );
