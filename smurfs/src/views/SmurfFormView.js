import React, { Component } from "react"
import { connect } from "react-redux"

import { addSmurf, updateSmurf } from "../actions"
import { Button, Form } from "../styles/formStyles"

class FriendForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: undefined,
      height: undefined
    }
  }

  componentDidMount = () => {
    console.log("In form: ", this.props.currentSmurf)
    if (this.props.currentSmurf) {
      const smurf = this.props.smurfs.find(
        smurf => smurf.id === this.props.currentSmurf.id
      )
      this.setState({
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
      })
    }
  }

  action = event => {
    event.preventDefault()
    if (this.props.action === "Add") this.props.addSmurf(this.state)
    if (this.props.action === "Update")
      this.props.updateSmurf(this.props.currentSmurf.id, this.state)
  }

  saveInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <Form onSubmit={this.action}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.saveInput}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.saveInput}
        />
        <input
          type="height"
          name="height"
          placeholder="Height"
          value={this.state.height}
          onChange={this.saveInput}
        />
        <Button type="submit">{this.props.action} Smurf</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    action: state.showForm,
    currentSmurf: state.currentSmurf,
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { addSmurf: addSmurf, updateSmurf: updateSmurf }
)(FriendForm)
