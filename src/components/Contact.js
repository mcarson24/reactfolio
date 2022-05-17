import React from 'react'

const Contact = () => {
  const handleFormSubmit = e => {
    e.preventDefault()
  }

  const handleBlur = e => {
    if (!e.target.value) console.log('You need to input something!')
  }

  return (
    <form method="POST" action="#" onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onBlur={(e) => handleBlur(e)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onBlur={(e) => handleBlur(e)} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" onBlur={(e) => handleBlur(e)}></textarea>
      </div>
      <div>
        <input type="submit" value="Send" />
      </div>
    </form>
  )
}

export default Contact