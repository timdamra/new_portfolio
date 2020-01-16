import React from 'react'
import { mount } from 'enzyme'

import Contact from './index'

describe('Contact', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(<Contact />)
  })

  it('should render Contact', () => {
    const contact = wrapper.find('Contact')
    expect(contact).toBeTruthy()
  })

  it('should render 3 `i` elements', () => {
    const iEl = wrapper.find('i')
    expect(iEl.length).toBe(3)
  })
})
