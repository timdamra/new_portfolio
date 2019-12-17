import React, { useState } from 'react'

import NavMenuLink from './NavMenuLink'
import { NAV_LABELS } from '../content'
import './index.css'

export function Nav() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [navIsExtended, setNavIsExtended] = useState(false) 

    const cssStyles = isMobile ? 'nav__extended' : 'nav'
    const extendedMobile = (isMobile && navIsExtended)
    const displayNav = extendedMobile || (!isMobile && !navIsExtended)    
    const isMobileMediaQuery = '(max-width: 767px)'
    const notMobileMediaQuery = '(min-width: 768px)'

    const handleBrowserResize = evt => {        
        if (evt.matches) {
            if (evt.media === isMobileMediaQuery) {
                setIsMobile(true)
            } else if (evt.media === notMobileMediaQuery) {
                setIsMobile(false)
            }
        }
    }    

    const browserHasShrunk = window.matchMedia(isMobileMediaQuery)
    const browserHasGrown = window.matchMedia(notMobileMediaQuery)
    browserHasShrunk.onchange = handleBrowserResize
    browserHasGrown.onchange = handleBrowserResize

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
                NAV_LABELS.length > 0 && 
                NAV_LABELS.map(navItem => (
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
