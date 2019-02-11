import react from 'react'
import {mount, render, shallow} from 'enzyme'

class Checked extends React.Component {
  render () {
    return (
      <div>
        <input id='checked' defaultChecked />
        <input id='not' defaultChecked={false} />
      </div>
    )
  }
}

export default Checked;