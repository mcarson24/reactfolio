import React from 'react'
import Project from './Project'
import projects from '../projects.json'

const Portfolio = () => {
  const classes = {
    projectContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }
  }
  return (
    <>
      <p className="text-4xl text-center">My Work</p>
      <div style={classes.projectContainer} className="items-stretch w-3/4">
        {projects && projects.map((project, index) => <Project project={project} key={index} />)}
      </div>
    </>
  )
}

export default Portfolio