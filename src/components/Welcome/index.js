// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  StateChange = () => {
    this.setState(prevState => {
      if (prevState.text === 'Subscribe') {
        return {text: 'Subscribed'}
      }
      return {text: 'Subscribe'}
    })
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="btn" onClick={this.StateChange}>
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
