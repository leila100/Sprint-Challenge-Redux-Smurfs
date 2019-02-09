/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

import {
  FETCHING,
  FETCHED,
  ERROR,
  SAVING,
  SAVED,
  SHOW_FORM,
  DELETING,
  DELETED
} from "../actions"

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  showForm: false
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      }
    case FETCHED:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ""
      }
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case SHOW_FORM:
      return {
        ...state,
        showForm: action.actionType,
        error: null
      }
    case SAVING:
      return {
        ...state,
        showForm: "",
        error: null,
        addingSmurf: true
      }
    case SAVED:
      return {
        ...state,
        addingSmurf: false,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      }
    case DELETING:
      return {
        ...state,
        deletingSmurf: true,
        addingSmurf: false,
        fetchingSmurfs: false,
        error: null
      }
    case DELETED:
      return {
        ...state,
        deletingSmurf: false,
        addingSmurf: false,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      }
    default:
      return state
  }
}
