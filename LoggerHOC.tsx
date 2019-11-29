import React, { Component } from "react";

export default InputComponent => {
  class LoggerHOC extends Component {
    componentDidMount() {
      console.log("In HOC");
    }

    render() {
      return (
        <div style={{backgroundColor:'red', padding:'10px'}}>
          <InputComponent {...this.props} />
        </div>
      );
    }
  }

  return LoggerHOC;
};
