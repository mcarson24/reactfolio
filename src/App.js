import React, {useState} from 'react'
import Navigation from './components/Navigation.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio.js'
import Resume from './components/Resume.js'

import 'devicon'

const App = () => {
  const [currentTab, setCurrentTab] = useState('About Me')

  const handleTabChange = tab => {
    setCurrentTab(tab)
  }

  const renderPage = () => {
    console.log(currentTab)
    if (currentTab === 'About Me') return <About />
    if (currentTab === 'Contact') return <Contact />
    if (currentTab === 'Portfolio') return <Portfolio />
    return <Resume />
  }
  return (
    <>
      <Navigation currentTab={currentTab} handleTabChange={handleTabChange}/>
      <main className="flex flex-col items-center justify-center">
        { renderPage() }
      </main>
      <footer className="flex flex-col items-center justify-center mt-8 py-16 bg-purple-400 text-white">
        &copy; 2022 Matthew Carson
        <div className="my-6 flex text-5xl text-white">
          <a href="https://github.com/mcarson24" target="_blank" rel="noreferrer noopener">
            <i className="devicon-github-original text-white hover:text-gray-100 mr-4"></i>
          </a>
          <a href="https://www.linkedin.com/in/carson-matthew/" target="_blank" rel="noreferrer noopener">
            <i className="devicon-linkedin-plain text-white hover:text-gray-100 mr-4"></i>
          </a>
          <a href="https://mcarson.me" target="_blank" rel="noreferrer noopener">
            <i class="devicon-vuejs-plain-wordmark"></i>
          </a>
        </div>
      </footer>
    </>
  )
}

export default App;
