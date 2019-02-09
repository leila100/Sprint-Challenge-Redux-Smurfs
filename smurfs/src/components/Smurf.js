import React from "react"
import { connect } from "react-redux"

import { deleteSmurf } from "../actions"

import {
  SmurfWrapper,
  SmurfInfo,
  IconsWrapper
} from "../styles/SmurfListStyles"

const Smurf = props => {
  return (
    <SmurfWrapper>
      <SmurfInfo>
        <div>
          <span>Name: </span>
          {props.smurf.name}
        </div>
        <div>
          <span>Age: </span>
          {props.smurf.age}
        </div>
        <div>
          <span>Height: </span>
          {props.smurf.height}
        </div>
      </SmurfInfo>
      <IconsWrapper>
        <i className="fas fa-user-edit" />
        <i
          className="fas fa-user-minus"
          onClick={() => props.deleteSmurf(props.smurf.id)}
        />
      </IconsWrapper>
    </SmurfWrapper>
  )
}

export default connect(
  null,
  { deleteSmurf }
)(Smurf)
