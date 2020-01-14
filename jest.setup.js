import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

global.window.matchMedia = () => {
  return {
    matches: true,
    addListener() {
      return true
    },
    removeListener() {
      return true
    }
  }
}
