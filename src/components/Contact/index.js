import React from 'react'

import './index.css'

export const Contact = () => {    
    return (
        <section className="contact">
            <a
                target="_blank" 
                rel="noopener noreferrer"
                href='https://github.com/timdamra'
            >
                <i className="github icon"></i>
                <p>Github</p>
            </a>
            <a
                target="_blank" 
                rel="noopener noreferrer"
                href='https://www.linkedin.com/in/hatimdamra/'
            >
                <i className="linkedin icon"></i>
                <p>LinkedIn</p>
            </a>
        </section>
    )
}

export default Contact
