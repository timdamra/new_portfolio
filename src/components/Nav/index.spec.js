import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Nav from './index'

const className = 'nav p-t-8'

describe('Nav', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
  })

  afterAll(() => {
    wrapper.unmount()
  })

  describe('Component', () => {
    it('should render nav with correct className', () => {
      expect(wrapper.find('nav').props().className).toBe(className)
    })

    it('should render nav with 3 links', () => {
      const navLinks = wrapper.find('.nav--link')
      expect(navLinks.length).toBe(3)
    })

    it('should navigate to new page upon clicking nav item', () => {
      const homeLink = wrapper.find('.nav--link').at(1)

      expect(wrapper.find('Router').props().history.entries.length).toBe(1)
      expect(wrapper.find('Router').props().history.entries[0].pathname).toBe(
        '/'
      )

      homeLink.simulate('click')

      expect(wrapper.find('Router').props().history.entries.length).toBe(2)
      expect(wrapper.find('Router').props().history.entries[0].pathname).toBe(
        '/'
      )
      expect(wrapper.find('Router').props().history.entries[1].pathname).toBe(
        '/portfolio'
      )
    })
  })

  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const component = renderer.create(wrapper)
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
