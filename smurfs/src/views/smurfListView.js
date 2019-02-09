import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchSmurfs, showForm } from "../actions/"
import Smurf from "../components/Smurf"

import { Message } from "../styles/messageStyles"
import { SmurfsListWrapper, SmurfsWrapper } from "../styles/SmurfListStyles"
import { Button } from "../styles/formStyles"

class SmurfList extends Component {
  componentDidMount = () => {
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <SmurfsListWrapper>
        <Message error>
          {this.props.error !== null && <h2>{this.props.error}</h2>}
        </Message>
        <Message>
          {this.props.fetching && <h2>Loading the smurfs!!</h2>}
        </Message>
        <Message>{this.props.adding && <h2>Adding the smurf!!</h2>}</Message>
        <Message>
          {this.props.deleting && <h2>Deleting your friend</h2>}
        </Message>
        <Message>
          {this.props.updating && <h2>Updating your friend</h2>}
        </Message>
        <SmurfsWrapper>
          {this.props.smurfs.map(smurf => (
            <Smurf key={smurf.id} smurf={smurf} />
          ))}
        </SmurfsWrapper>
        <Button onClick={() => this.props.showForm("Add")}>Add Smurf</Button>
      </SmurfsListWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    error: state.error,
    form: state.showForm,
    adding: state.addingSmurf,
    deleting: state.deletingSmurf,
    updating: state.updatingSmurf
  }
}

export default connect(
  mapStateToProps,
  { fetchSmurfs, showForm }
)(SmurfList)
