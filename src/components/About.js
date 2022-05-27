import React from 'react'
import 'devicon'

import headshot from '../images/mc_photo.png'

const About = () => {
  const classes = {
    main: {
      // width: '75%',
      margin: '0 auto'
    },
    title: {
      fontSize: '4em'
    },
    subtitle: {
      fontSize: '2em'
    },
    head: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    about: {
      display: 'flex',
      flexDirection: 'column',
    },
    icon: {
      height: '3.75rem'
    }
  }
  return (
    <main style={classes.main} className="flex flex-col items-center">
      <header style={classes.head} className="my-8 text-purple-600">
        <h1 style={classes.title}>Matthew Carson</h1>
        <h2 style={classes.subtitle} className="text-purple-400">Full-Stack Web Developer</h2>
      </header>
      <section style={classes.about} className="bg-purple-400 flex items-center justify-center py-8 text-white">
        <div className="flex flex-col items-center w-3/4">
          <img src={headshot} alt="My headshot" className="rounded-lg h-64 w-64" />
          <h2  className="text-4xl text-center">Who Am I?</h2>
          <p className="my-4">My name is Matthew Carson. I am an full-stack web developer who loves the idea of being able to use technology to solve both simple and complex problems.</p>

          <p className="my-4">I was first introduced to web development while I attended Temple University from 2007 until 2012, where I graduated with a B.B.A. in Management Information Systems and Accounting. Recently, after feeling dissatisfied with my career trajectory, I rediscovered my passion for web development and recommitted myself to learning it in order to pursue a more fulfilling and gratifying career.</p>

          <p className="my-4">I have been learning web development for the past two years over which I have greatly increased my knowledge of PHP, specifically the Laravel MVC framework, as well as JavaScript, using the Vue.js front-end framework (which I used for this site). Currently I am working on gaining greater familiarity with content management systems such as Wordpress and Drupal.</p>

          <p className="my-4">When I'm not trying to figure out regular expressions, I'm usually either reading fantasy novels and biographies or walking my pitbull, Duchess. In meiner Freizeit, lerne ich auch gern Deutsch.</p>

          <p className="my-4">I am currently located in the Philadelphia area.</p>
        </div>
      </section>
    </main>
  )
}

export default About