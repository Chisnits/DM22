import { createStore } from 'redux'


function reducer(state){
    var initialState = {
        chores: ["laundry", "sweeping", "washing"]
    }
}

export default createStore(reducer, initialState);