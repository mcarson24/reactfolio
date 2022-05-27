import React from 'react'
import '../styles.css'

const Project = ({project}) => {
  const classes = {
    tags: {
      marginLeft: '.25rem',
      marginRight: '.25rem',
      paddingLeft: '.75rem',
      paddingRight: '.75rem',
      paddingTop: '.25rem',
      paddingBottom: '.25rem',
      fontSize: '.875rem',
      color: '#fff',
      backgroundColor: '#718096',
      borderRadius: '.5rem',
    }
  }
  return (
    <div className="mx-auto my-6 md:mb-0 flex flex-col bg-white h-full shadow-lg rounded" style={{width: '45%', minHeight: '550px'}}>
      <img src={process.env.PUBLIC_URL + `${project.image}`} alt="Portfolio Project" className="rounded-t" style={{maxHeight: '250px'}} />
      <div className="my-4 flex flex-col items-strech justify-items-stretch h-3/4">
        <div className="information text-blue-darkest px-4 flex flex-col">
          <h2 className="text-3xl font-bold">{project.name}</h2>
          <p className="description my-4 text-blue-darker leading-normal">{project.description}</p>
        </div>
        <div className="tags block flex flex-wrap  ml-3">
          {project.technologies.map(tech => (
            <span style={classes.tags} className="my-3">{tech}</span>
          ))}
        </div>
        <div className="flex justify-start mt-6">
          <div className="flex flex-row justify-center flex-wrap">
            <a href={project.link} target="_blank" rel="noreferrer noopener" className="card-button px-4 my-2 min-w-fit text-center focus:outline-none focus:shadow-outline">View</a>
            <a href={project.repository} target="_blank" rel="noreferrer noopener" className="card-button px-4 my-2 min-w-fit text-center focus:outline-none focus:shadow-outline">Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project