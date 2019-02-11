1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    map, find, filter.
    const newObject = { ...oldObject, newProperty: value }

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: An action is like a message that we send to the Redux store. An action is a simple object that must include a type value. The only way we can change data in Redux is through an action creator.

reducers: Reducers produce the state of the application. A Redux reducer gets to decide how each action affects the state. A reducer has an initial state, and it has a default case that handles any actions it doesn’t understand (it returns the existing state, unchanged, when it sees such an action).

store: The state of the whole application lives inside the store. When an action is dispatched, the store calls the reducer, and replaces its internal state with whatever the reducer returned. Every time the store calls the reducer, it passes in the last-known state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, and Component state is local.
Redux, uses a store to hold application state. That means any component, anywhere in the app can access it.
Component state however, lives within a specific component. It can only be updated by that component and passed down to its children via props.

We should use application state whenever state needs to be shared by multiple components.
The more state needs to be shared between different components, the more benefit there is to using the Redux store.

4.  What is middleware?
    A middleware is a function that stops every action from going straight to the reducer, executes some commands, and passes the action to the next middleware or to the reducers if no more middleware exist.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our 5action-creators`?
    redux-thunk is a middleware that looks at every action that passes through the system, and if it’s a function, it calls that function,and otherwise passes the action along to the next middleware or to the reducer.  
    redux-thunk allows the action-creators to make asynchronous/API calls (Axios).

6.  Which `react-redux` method links up our `components` with our `redux store`?
    The method is connect.
