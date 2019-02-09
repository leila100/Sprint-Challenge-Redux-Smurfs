import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchSmurfs, showForm } from "../actions/"
import Smurf from "../components/Smurf"

class SmurfList extends Component {
  componentDidMount = () => {
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div>
        {this.props.error !== null && <h2>{this.props.error}</h2>}
        {this.props.fetching && <h2>Loading the smurfs!!</h2>}
        {this.props.adding && <h2>Adding the smurf!!</h2>}
        {this.props.smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
        <button onClick={() => this.props.showForm("Add")}>Add Smurf</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    error: state.error,
    form: state.showForm,
    adding: state.addingSmurf
  }
}

export default connect(
  mapStateToProps,
  { fetchSmurfs, showForm }
)(SmurfList)
