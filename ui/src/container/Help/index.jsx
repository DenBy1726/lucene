import React from 'react';
import { enquireScreen } from 'enquire-js';

import Feature3 from './Feature3';

import { Feature30DataSource } from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
 
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    const children = [
      <Feature3
        id="Feature3_0"
        dataSource={Feature30DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}
