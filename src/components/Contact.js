import React, { useState } from 'react'

const Contact = () => {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  })
  const [formState, setFormState] = useState({})
  const [messageSent, setMessageSent] = useState(false)

  const handleFormSubmit = e => {
    e.preventDefault()
    if (!formState.name || ! formState.email || ! formState.message) return
    setFormState({
      name: '',
      email: '',
      message: ''
    })
    setMessageSent(true)
  }

  const handleBlur = e => {
    if (!e.target.value) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [e.target.id]: true
      }))
    } else {
      setErrors({
        name: false,
        email: false,
        message: false,
      })
    }
  }

  const handleChange = e => {
    const id = e.target.id
    const value = e.target.value
    setFormState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  return (
    <>
      <h2 className="text-4xl text-purple-600"> Hit Me Up</h2>
      <div className="w-3/4 flex flex-col justify-center items-center">
        <form method="POST" action="#" onSubmit={handleFormSubmit} className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-between items-center my-4 w-3/4">
            <label htmlFor="name" className="mr-4">Name</label>
            <div className="flex flex-col w-3/4 text-xs text-red-400">
              <input type="text" id="name" name="name" value={formState.name} onChange={e => handleChange(e)} onBlur={(e) => handleBlur(e)} className={ errors.email ? 'border border-2 border-red-800  text-red-800bg-red-400 w-3/4' : 'border w-3/4 text-black'}
              />
              {errors.name && <span>You need to input something! This field is required</span>}
            </div>
          </div>
          <div className="flex justify-between items-center my-4 w-3/4">
            <label htmlFor="email" className="mr-4">Email</label>
            <div className="flex flex-col w-3/4 text-xs text-red-400">
              <input type="email" id="email" name="email" value={formState.email} onChange={e => handleChange(e)} onBlur={(e) => handleBlur(e)} className={ errors.email ? 'border border-2 border-red-800  text-red-800bg-red-400 w-3/4' : 'border w-3/4 text-black'}
              />
               {errors.email && <span>You need to input something! This field is required</span>}
            </div>
          </div>
          <div className="flex justify-between items-center my-4 w-3/4">
            <label htmlFor="message" className="mr-4">Message</label>
            <div className="flex flex-col w-3/4 text-xs text-red-400">
              <textarea id="message" name="message" value={formState.message} onChange={e => handleChange(e)} onBlur={(e) => handleBlur(e)} className={ errors.email ? 'border border-2 border-red-800 bg-red-400 text-red-800 w-3/4 h-64' : 'border w-3/4 h-64 text-black'}></textarea>
               {errors.message && <span>You need to input something! This field is required</span>}
            </div>
          </div>
          <div className="flex justify-end items-center my-4 w-3/4">
            <input type="submit" value="Send" className="bg-purple-400 hover:bg-purple-600 py-2 px-4 rounded-lg hover:cursor-pointer text-white" />
          </div>
          {messageSent && <span>Thanks for the message!</span>}
        </form>
      </div>
    </>
  )
}

export default Contact