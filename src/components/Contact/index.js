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
                <div className="contact__div-block">
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
                </div>
                <div className="contact__div-block">
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
                </div>
                <div className="contact__div-block">
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
                </div>
            </div>
        </section>
    )
}

export default Contact
