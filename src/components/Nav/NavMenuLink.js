import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

export function NavMenuLink(props) {
  let history = useHistory()

  return (
    <div
      className={props.isMobile ? 'nav__extended--link' : 'nav--link'}
      onClick={() => {
        props.setNavIsExtended(false)
        history.push(props.link)
      }}
    >
      {props.label}
    </div>
  )
}

NavMenuLink.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  setNavIsExtended: PropTypes.func,
  isMobile: PropTypes.bool
}

export default NavMenuLink
