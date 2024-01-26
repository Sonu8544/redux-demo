const redux = require('redux');

// Reducer function
const counterReducer = (state = { counter: 10 }, action) => {

    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 10,
        }
    }
    else {
        return {
            counter: state.counter - 1
        }
    }
    return state
};

// Create Redux store
const store = redux.createStore(counterReducer);

// Initial state
console.log("initial State", store.getState());

// Subscriber function
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState.type, latestState);
};

// Subscribe to the store
store.subscribe(counterSubscriber);

// Dispatch an action (you need to provide an action with a type)
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
