import React from 'react'

const Resume = () => (
  <>
    <h2 className="text-4xl text-purple-600">Resume</h2>
    <a href={process.env.PUBLIC_URL + '/matthew_carson_resume.pdf'} className="my-4 text-blue-400">View My Resume</a>
    <section className="w-3/4">
      <h2 className="text-4xl text-center text-purple-600">My Skillset</h2>
      <div className="icons-container mx-auto">
        <div className="flex justify-around my-6 py-2">
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-php-plain"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-laravel-plain-wordmark"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-wordpress-plain-wordmark"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-mysql-plain-wordmark"></i>
        </div>
        <div className="flex justify-around my-6 py-2">
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-javascript-plain"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-nodejs-plain-wordmark"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-vuejs-plain-wordmark"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-react-plain-wordmark"></i>
        </div>
        <div className="flex justify-around my-6 py-2">
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-html5-plain-wordmark"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-css3-plain-wordmark"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-bootstrap-plain-wordmark"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-sass-plain"></i>
        </div>
        <div className="flex justify-around my-6 py-2">
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-webpack-plain-wordmark"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-jquery-plain-wordmark"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-git-plain-wordmark"></i>
          <i className="text-5xl lg:text-6xl hover:opacity-75 text-purple-500 hover:text-purple-800 text-5xl devicon-github-original-wordmark"></i>
        </div>
      </div>
    </section>
  </>
)

export default Resume