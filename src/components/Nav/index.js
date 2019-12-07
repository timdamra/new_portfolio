import React, { useState } from 'react'

import NavMenuLink from './NavMenuLink'
import { LABELS } from './content'
import './index.css'

export function Nav() {
    const isMobile = window.innerWidth < 768
    const cssStyles = isMobile ? 'nav__extended' : 'nav'      
    const [navIsExtended, setNavIsExtended] = useState(false) 

    const extendedMobile = (isMobile && navIsExtended)
    const displayNav = extendedMobile || (!isMobile && !navIsExtended)    

    const shouldDisplayNavIcons = () => {
        if (isMobile) {
            return navIsExtended ? (
                <div className="nav--icon m-b-8" onClick={() => setNavIsExtended(false)}>&times;</div>
            ) : (
                <div className="nav--icon m-b-8" onClick={() => setNavIsExtended(true)}>&#9776;</div>
            )
        }
    }

    return (
        <nav className={`${cssStyles} p-t-8`}>
            {shouldDisplayNavIcons()}
            {
                displayNav &&
                LABELS.length > 0 && 
                LABELS.map(navItem => (
                    <NavMenuLink 
                      label={navItem.label}
                      key={navItem.label}
                      link={navItem.link}
                      setNavIsExtended={setNavIsExtended}
                      isMobile={isMobile}
                    />
                ))
            }
        </nav>
    )
}

export default Nav
