import React from 'react'

import './index.css'

export const Contact = () => {    
    return (
        <section className="contact">
            <div>
                <div>
                    <a
                        target="_blank" 
                        rel="noopener noreferrer"
                        href='https://github.com/timdamra'
                        className='contact--icon'
                    >
                        <i className="github icon"></i>                    
                    </a>
                    <p>Github</p>
                </div>
                <a
                    target="_blank" 
                    rel="noopener noreferrer"
                    href='https://github.com/timdamra'
                    className='contact--link'
                >
                    github.com/timdamra
                </a>
            </div>
            <div>
                <div>
                    <a
                        target="_blank" 
                        rel="noopener noreferrer"
                        href='https://www.linkedin.com/in/hatimdamra/'
                        className='contact--icon'
                    >
                        <i className="linkedin icon"></i>                    
                    </a>
                    <p>LinkedIn</p>
                </div>
                <a
                    target="_blank" 
                    rel="noopener noreferrer"
                    href='https://www.linkedin.com/in/hatimdamra/'
                    className='contact--link'
                >
                    linkedin.com/in/hatimdamra
                </a>
            </div>
            <div>
                <div>
                    <a
                        target="_blank" 
                        rel="noopener noreferrer"
                        href='mailto:hdamra@gmail.com'
                        className='contact--icon'
                    >
                        <i className="google icon"></i>                    
                    </a>
                    <p>Email</p>
                </div>
                <a
                    target="_blank" 
                    rel="noopener noreferrer"
                    href='mailto:hdamra@gmail.com'
                    className='contact--link'
                >
                    hdamra@gmail.com                    
                </a>
            </div>
        </section>
    )
}

export default Contact
