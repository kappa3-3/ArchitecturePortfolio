import Icon from "../../assets/icons/Icon";
import React, {Component} from "react";
import SingleProject from "../SingleProject";
import './style.scss';
import debounce from 'lodash';
import Projects from '../../projects';
import Intro from "../Intro";


class GlobeUpdate extends Component {
    constructor(props) {
        super(props);
        debounce(this.handleWheel, 400)
    }
    state = {
        projects: [],
        visible: 0,
        welcomePrompt: true
    };



    componentDidMount() {

        window.addEventListener('wheel', this.handleWheel);

        const URL_PROJECTS = 'http://localhost:3000/projects';
        fetch(URL_PROJECTS)
            .then(data => data.json())
            .then(projects => this.setState({projects}))
            .catch(()=> this.setState({projects: Projects.projects}));
    };

    handleWheel = event => {

        if (event.deltaY > 0) {
            this.setState({welcomePrompt:false});
            if (this.state.visible >= this.state.projects.length ) {
                // eslint-disable-next-line react/no-direct-mutation-state
                this.setState({visible: this.state.visible = 1})
            } else {
                this.setState({visible: this.state.visible + 1});
            }
        } else {
            if (this.state.visible < 2) {
                this.setState({visible: this.state.projects.length})
            } else {
                this.setState({visible: this.state.visible - 1});
            }
        }
    };

    render() {
        const {projects} = this.state;
        let icons = [];
        const cards = projects.map(project => {
            icons.push( <Icon className={`icon-${project.id}`} type={project.class}/>);
            console.log(this.state.visible);
            return(
                <>
                    <SingleProject
                        project={project}
                        willBeUnmountedUp={project.id === this.state.visible}
                        willBeUnmountedDown={project.id === this.state.visible - 1}
                    />
                </>
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