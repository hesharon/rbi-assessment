import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

describe('button', () => {
  let wrapper

  beforeEach(() => {
   wrapper = Enzyme.shallow(<App />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Increment player1', () => {
    it('increment 4 times', () => {
      wrapper.find('#player-1').props().onClick({ target: { value: 15 } })
      expect(wrapper.find('#player-1').props().value).toBe(15)
      wrapper.find('#player-1').props().onClick({ target: { value: 30 } })
      expect(wrapper.find('#player-1').props().value).toBe(30)
      wrapper.find('#player-1').props().onClick({ target: { value: 40 } })
      expect(wrapper.find('#player-1').props().value).toBe(40)
      wrapper.find('#player-1').props().onClick({ target: { value: 50 } })
      expect(wrapper.find('#player-1').props().value).toBe(50)
    })
  })

  describe('Increment player2', () => {
    it('increment 4 times', () => {
      wrapper.find('#player-2').props().onClick({ target: { value: 15 } })
      expect(wrapper.find('#player-2').props().value).toBe(15)
      wrapper.find('#player-2').props().onClick({ target: { value: 30 } })
      expect(wrapper.find('#player-2').props().value).toBe(30)
      wrapper.find('#player-2').props().onClick({ target: { value: 40 } })
      expect(wrapper.find('#player-2').props().value).toBe(40)
      wrapper.find('#player-2').props().onClick({ target: { value: 50 } })
      expect(wrapper.find('#player-2').props().value).toBe(50)
    })
  })
})
