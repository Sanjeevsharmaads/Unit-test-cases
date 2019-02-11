import react from 'react'
import {mount, render, shallow} from 'enzyme'

class Demo extends React.Component {
  render () {
    return (
      <div>
        <input id='checked' defaultChecked />
        <input id='not' defaultChecked={false} />
        <h1>Hello World Sharma</h1>
        <p>Welcome to my world</p>
      </div>
    )
  }
}

export default Demo;