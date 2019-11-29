import React from 'react';
import LoggerHOC from './LoggerHOC';

// export default (props) =>
// {
//   return (
//     <div style= {{backgroundColor:'gray', padding:'10px'}}>
//       <div style= {{backgroundColor:'blue', padding:'10px'}}>
//       //this replaces inner tag in it.
//       {props.children}
//     </div>
//     </div>
//   );
// }
let value = (props) => ( <div style= {{backgroundColor:'gray', padding:'10px'}}>
      <div style= {{backgroundColor:'blue', padding:'10px'}}>
      //this replaces inner tag in it.
      {props.children}
    </div>
    </div>)

export default LoggerHOC(value);
