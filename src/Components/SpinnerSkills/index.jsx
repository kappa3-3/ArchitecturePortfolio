import React, {Component} from 'react';
import './style.scss'
import '../Globe/style.scss'

class Spinner extends Component {
    state = {
        skills: [1,2,3,4],
        visible: 0,
    };

    componentDidMount() {
        window.addEventListener('wheel', this.handleWheel);

        };

    handleWheel = event => {

        if (event.deltaY > 0) {
            if (this.state.visible > this.state.skills.length) {

                // eslint-disable-next-line react/no-direct-mutation-state
                this.setState({visible: this.state.visible = 0})
            } else {
                this.setState({visible: this.state.visible + 1});
            }
        } else {
            if (this.state.visible < 0.5) {
                this.setState({visible: this.state.skills.length + 1})
            } else {
                this.setState({visible: this.state.visible - 1});
            }
        }
    };

    render() {

        return (
            <div tabIndex={1} className="container">
                <div className='globe'>
                    <div className={`globe-outer globe-outer-${this.state.visible % 1 === 0 ? this.state.visible - 1 : this.state.visible -0.5}`}>
                    </div>
                </div>
            </div>
        );
    }
}
export default Spinner;