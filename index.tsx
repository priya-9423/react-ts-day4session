import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import ButtonWrapper from './ButtonWrapper'
import PropsParent from './PropsParent'

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <ButtonWrapper clickEvent = {() => alert("clicked")}/>
        <PropsParent>
        <div>
        A,B,C
        </div>
        </PropsParent>
      </div>

    );
  }
}

render(<App />, document.getElementById('root'));
