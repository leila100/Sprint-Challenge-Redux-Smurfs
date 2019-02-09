import React from "react"

import { SmurfWrapper, SmurfInfo } from "../styles/SmurfListStyles"

const Smurf = props => {
  return (
    <SmurfWrapper>
      <SmurfInfo>
        <span>Name: </span>
        {props.smurf.name}
      </SmurfInfo>
      <SmurfInfo>
        <span>Age: </span>
        {props.smurf.age}
      </SmurfInfo>
      <SmurfInfo>
        <span>Height: </span>
        {props.smurf.height}
      </SmurfInfo>
    </SmurfWrapper>
  )
}

export default Smurf
