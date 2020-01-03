import React from 'react';
import './style.scss';

const SingleProject = ({project, willBeUnmountedUp, willBeUnmountedDown}) => {

    return (
        <div key={project.id} className='project-container'>
            <div
                className={`hideElement ${project.class} ${willBeUnmountedUp ? 'fadeIn' : 'fadeOut'} ${willBeUnmountedDown ? 'fadeOut' : ''}`}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
            </div>
            <div
                className={`${project.class}-bg ${willBeUnmountedUp ? 'fadeIn' : 'fadeOut'} ${willBeUnmountedDown ? 'fadeOut' : ''}`}/>
        </div>
    );
};

export default SingleProject;