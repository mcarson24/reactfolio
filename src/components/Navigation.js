import React from 'react'

const Navigation = ({currentTab, handleTabChange}) => {
  return (
    <nav className="mb-6 py-6 bg-purple-400 text-white">
      <ul className="flex justify-end h-full">
        <li className={currentTab === 'About Me' ? 'mr-8 text-purple-600 pb-2 font-bold border-b-4 border-purple-600' : 'mr-8'}>
          <a href="#about"
             onClick={() => handleTabChange('About Me')}>
            About Me
          </a>
        </li>
        <li className={currentTab === 'Portfolio' ? 'mr-8 text-purple-600 pb-2 font-bold border-b-4 border-purple-600' : 'mr-8'}>
          <a href="#portfolio"
             onClick={() => handleTabChange('Portfolio')}>
            Portfolio
          </a>
        </li>
        <li className={currentTab === 'Contact' ? 'mr-8 text-purple-600 pb-2 font-bold border-b-4 border-purple-600' : 'mr-8'}>
          <a href="#contact"
             onClick={() => handleTabChange('Contact')}>
            Contact
          </a>
        </li>
        <li className={currentTab === 'Resume' ? 'mr-8 text-purple-600 pb-2 font-bold border-b-4 border-purple-600' : 'mr-8'}>
          <a href="#resume"
             onClick={() => handleTabChange('Resume')}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation