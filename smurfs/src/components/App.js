import React, { Component } from "react"
import { connect } from "react-redux"

import "./App.css"
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import SmurfList from "../views/smurfListView"
import SmurfForm from "../views/SmurfFormView"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
        {this.props.showForm ? <SmurfForm /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showForm: state.showForm
  }
}

export default connect(mapStateToProps)(App)
