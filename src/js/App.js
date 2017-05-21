import React from 'react'
import { connect } from 'react-redux'

import logo from '../images/logo.svg'
import '../css/App.css';

import { increaseCount, decreaseCount } from './actions/countActions'
import Counter from './components/Counter'

class App extends React.Component {
  handlePlusClick() {
    this.props.dispatch(increaseCount(this.props.count))
  }

  handleMinusClick() {
    this.props.dispatch(decreaseCount(this.props.count))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter
          onIncrement={this.handlePlusClick.bind(this)}
          onDecrement={this.handleMinusClick.bind(this)}
          value={this.props.count}
        />
      </div>
    )
  }
}

export default connect((store) => {
  return {
    count: store.countReducer.count
  }
})(App)
