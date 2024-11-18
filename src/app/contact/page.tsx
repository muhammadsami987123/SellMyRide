import React from 'react'

const contact= () => {
  return (
    <div>
      <section className='form' >
        <h2>
          Contact Us
        </h2>
        <form>
          
          <input type="text" placeholder='Full Name'  required />
          <input type="Email" placeholder='Email Address'  required/>
          <input type="text" placeholder='Phone Number' required />
          <textarea placeholder='Your Feedback' rows={5} required ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default contact