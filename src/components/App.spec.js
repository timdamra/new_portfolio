import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  describe('Component', () => {
    let wrapper

    beforeAll(() => {
      wrapper = shallow(<App />)
    })

    it('should render Nav component', () => {
      const nav = wrapper.find('Nav')

      expect(nav.length).toBe(1)
    })

    it('should render StateProvider component', () => {
      const sp = wrapper.find('StateProvider')

      expect(sp.length).toBe(1)
    })
  })
})
