import React, { Component } from 'react';
import GlobeUpdate from '../../Components/GlobeUpdate';
import Smartphone from "../../Components/SmartPhone";

class Home extends Component {
  state = {
    smartphone: false
  };

  componentDidMount() {
    window.addEventListener('resize', this.reportWindowSize);
  }
  reportWindowSize = () => {
    window.outerWidth < 1060 ? this.setState({ smartphone: true }) : this.setState({ smartphone: false })

  };

  render() {
    return (
      <>
        {this.state.smartphone && <Smartphone />}
        {!this.state.smartphone && <GlobeUpdate />}
      </>
    );
  }
}
export default Home;