import Icon from "../../assets/icons/Icon";
import React, {Component} from "react";
import SingleProject from "../SingleProject";
import './style.scss';
import debounce from 'lodash';
import Projects from '../../projects';

class Globe extends Component {
    constructor(props) {
        super(props);
        debounce(this.handleWheel, 100)
    }
    state = {
        projects: [],
        visible: 0,
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
            if (this.state.visible > this.state.projects.length + 0.5) {
                // eslint-disable-next-line react/no-direct-mutation-state
                this.setState({visible: this.state.visible = 0.5})
            } else {
                this.setState({visible: this.state.visible + 0.5});
            }
        } else {
            if (this.state.visible < 0.5) {
                this.setState({visible: this.state.projects.length + 0.5})
            } else {
                this.setState({visible: this.state.visible - 0.5});
            }
        }
    };

    render() {
        const {projects} = this.state;
        let icons = [];
        const cards = projects.map(project => {
            icons.push( <Icon className={`icon-${project.id}`} type={project.class}/>);

            return(
                <>
                    <SingleProject
                        project={project}
                        willBeUnmountedUp={project.id === this.state.visible - 0.5}
                        willBeUnmountedDown={project.id === this.state.visible - 1}
                    />
                </>
            )
        });

        return (
            <div tabIndex={1} className="container">
                <div className='globe'>
                    <div className={`globe-outer globe-outer-${this.state.visible % 1 === 0 ? this.state.visible - 1 : this.state.visible -0.5}`}>
                        {icons[this.state.visible - 1.5]}
                    </div>
                    {cards}
                </div>
            </div>
        );
    }
}

export default Globe;