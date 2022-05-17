import React, {useState} from 'react'
import Navigation from './components/Navigation.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio.js'
import Resume from './components/Resume.js'

const App = () => {
  const [currentTab, setCurrentTab] = useState('Portfolio')

  const handleTabChange = tab => {
    setCurrentTab(tab)
  }

  const renderPage = () => {
    if (currentTab === 'About Me') return <About />
    if (currentTab === 'Contact') return <Contact />
    if (currentTab === 'Portfolio') return <Portfolio />
    return <Resume />
  }
  return (

    <>
      <Navigation currentTab={currentTab}handleTabChange={handleTabChange}/>
      <main className="container mx-auto">
        { renderPage() }
      </main>
    </>
  )
}

export default App;
