const redux = require('redux');

// Reducer function
const counterReducer = (state = { counter: 0 }, action) => {

    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 10,
        }
    }
    else {
        return {
            counter: state.counter - 10
        }
    }
};

// Create Redux store
const store = redux.createStore(counterReducer);

// Initial state
console.log(store.getState());

// Subscriber function
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// Subscribe to the store
store.subscribe(counterSubscriber);

// Dispatch an action (you need to provide an action with a type)
store.dispatch({ type: 'DECREMENT' });
