import React from 'react';
import './style.scss';

const SingleProject = ({ project, willBeUnmountedUp, willBeUnmountedDown, toggleVisibility }) => {
  const { id, cl, name, description } = project;
  return (
    <div
      key={id}
      className={
        `project-container ${toggleVisibility ? 'hideElement' : ''}`
      }
    >
      <div
        className={`
          ${cl} 
          ${willBeUnmountedUp
            ? 'fadeIn'
            : 'fadeOut'} 
          ${willBeUnmountedDown
            ? 'fadeOut'
            : ''}
        `}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div
        className={`
      ${cl}-bg
       ${willBeUnmountedUp
            ? 'fadeIn'
            : 'fadeOut'} 
       ${willBeUnmountedDown
            ? 'fadeOut'
            : ''}
       `} />
    </div>
  );
}

export default SingleProject;