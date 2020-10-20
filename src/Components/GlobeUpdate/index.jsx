import React, { Component } from "react";
import Icon from "../../assets/icons/Icon";
import SingleProject from "../SingleProject";
import Intro from "../Intro";
import Projects from '../../projects';
import './style.scss';

class GlobeUpdate extends Component {

  state = {
    projects: Projects.projects,
    visible: 0,
    scrolled: true,
    welcomePrompt: true
  };

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel);
  };

  handleWheel = event => {
    if (this.state.scrolled) {
      if (event.deltaY > 0) {
        this.setState({ welcomePrompt: false });
        if (this.state.visible >= this.state.projects.length) {
          this.setState({ visible: 1 })
        } else {
          this.setState({ visible: this.state.visible + 1 });
        }
      } else {
        if (this.state.visible < 2) {
          this.setState({ visible: this.state.projects.length })
        } else {
          this.setState({ visible: this.state.visible - 1 });
        }
      }
      this.setState({ scrolled: false }, () => {
        setTimeout(() => {
          this.setState({ scrolled: true })
        }, 600)
      })
    }
  };

  render() {
    const { projects, visible, welcomePrompt } = this.state;
    let icons = [];
    const cards = projects.map(project => {
      const { id, cl } = project;
      icons.push(
        <Icon
          className={`icon-${id}`}
          key={id}
          type={cl}
        />);
      return (
        <SingleProject
          toggleVisibility={welcomePrompt}
          project={project}
          key={id}
          willBeUnmountedUp={id === visible}
          willBeUnmountedDown={id === visible - 1}
        />
      );
    });
    return (
      <div tabIndex={1} className="container">
        {this.state.welcomePrompt && <Intro />}
        <div className='globe'>
          {cards}
          <div className={`globe-outer globe-outer-${this.state.visible} `}>
            {icons[this.state.visible - 1]}
          </div>
        </div>
      </div>
    );
  }
}

export default GlobeUpdate;