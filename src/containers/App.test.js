import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import BoardPage from './BoardPage'
import H1 from '../components/H1'

describe('App component', () => {
  
  it('should render H1', () => {
    const component = shallow(<App />)
    expect(component.find(H1)).toHaveLength(1)
  })

  it('should render BoardPage', () => {
    const component = shallow(<App />)
    expect(component.find(BoardPage)).toHaveLength(1)
  })
  
})
