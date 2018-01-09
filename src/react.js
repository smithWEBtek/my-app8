import React from 'react';


export default class Redux1 extends Component {

let state = {count: 0};

function changeState(state, action){
   switch (action.type) {
     case 'INCREASE_COUNT':
       return {count: state.count + 1}
     default:
       return state;
   }
 }

function dispatch(action){
   state = changeState(state, action)
}

dispatch({type: 'INCREASE_COUNT'})
   // => 1
dispatch({type: 'INCREASE_COUNT'})
   // => 2
dispatch({type: 'INCREASE_COUNT'})
   // => 3
}