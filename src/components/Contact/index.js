import React, { Suspense, lazy } from 'react'

import './index.css'

const MyImage = lazy(() => import('./img'))

export const Contact = () => {    
    return (
        <section className="contact">
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <MyImage />
                </Suspense>
            </div>
            <div>
                <span className="contact__span-block">
                    <a
                        target="_blank" 
                        rel="noopener noreferrer"
                        href='https://github.com/timdamra'
                        className='contact--icon'
                        title="Github"
                    >
                        <i className="github icon"></i>                    
                    </a>                        
                </span>
                <span className="contact__span-block">
                    <a
                        target="_blank" 
                        rel="noopener noreferrer"
                        href='https://www.linkedin.com/in/hatimdamra/'
                        className='contact--icon'
                        title="LinkedIn"
                    >
                        <i className="linkedin icon"></i>                    
                    </a>                        
                </span>
                <span className="contact__span-block">
                    <a
                        target="_blank" 
                        rel="noopener noreferrer"
                        href='mailto:hdamra@gmail.com'
                        className='contact--icon'
                        title="Gmail"
                    >
                        <i className="google icon"></i>                    
                    </a>
                </span>
                <p>Please feel free to contact me about any opportunities you want to discuss, feedback you want me to hear or 
                    just to say hi, Cheers!
                </p>
            </div>
        </section>
    )
}

export default Contact
