/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from "axios"

export const FETCHING = "FETCHING"
export const FETCHED = "FETCHED"
export const ERROR = "ERROR"
export const SAVING = "SAVING"
export const SAVED = "SAVED"
export const DELETING = "DELETING"
export const DELETED = "DELETED"
export const UPDATING = "UPDATING"
export const UPDATED = "UPDATED"
export const SHOW_FORM = "SHOW_FORM"

export function fetchSmurfs() {
  return dispatch => {
    dispatch({ type: FETCHING })
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: "Can't fetch the smurfs!" })
      })
  }
}

export function showForm(actionType, smurf) {
  return { type: SHOW_FORM, actionType: actionType, currentSmurf: smurf }
}

export function addSmurf(smurf) {
  return dispatch => {
    dispatch({ type: SAVING })
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        dispatch({ type: SAVED, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: "Can't add the smurf!" })
      })
  }
}

export function deleteSmurf(id) {
  return dispatch => {
    dispatch({ type: DELETING })
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: DELETED, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: "Can't delete the smurf!" })
      })
  }
}

export function updateSmurf(id, smurf) {
  return dispatch => {
    dispatch({ type: UPDATING })
    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(response => {
        dispatch({ type: UPDATED, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: "Can't update the smurf!" })
      })
  }
}
