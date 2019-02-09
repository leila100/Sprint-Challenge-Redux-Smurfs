import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchSmurfs } from "../actions/"
import Smurf from "../components/Smurf"

class SmurfList extends Component {
  componentDidMount = () => {
    console.log("Props: ", this.props)
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div>
        {this.props.error !== null && <h2>{this.props.error}</h2>}
        {this.props.smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfList)
