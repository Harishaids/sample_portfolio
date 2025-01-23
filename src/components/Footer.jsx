import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className=''>
            <div className='flex'>
                <div className='flex-1'>
                <h3>Harish</h3>
                <p>Full-stack Web developer based in the USA,specializing in web and software development</p>
            </div>
            <div className='flex-1'>
                <form >
                    <input type="email" placeholder='Enter Email'/>
                    <button>Subscribe</button>
                </form>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer