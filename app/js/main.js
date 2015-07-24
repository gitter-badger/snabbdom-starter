"use strict";

import h from 'snabbdom/h';
import updateDOM from './updateDOM';

function view(state, handler) { 
  return h('div', [
    h('input', {
      props: { type: 'text', placeholder: 'Type a your name' },
      on   : { input: e => handler(state, e) }
    }),
    h('div', 'Hello ' + state.name)
  ]); 
}

function handler(state, event) {
  return { name: event.target.value };
}


function viewHandler(state, event) {
  const newState = handler(state, event);
  const newVnode = view(newState, viewHandler);
  updateDOM(newVnode);  
}

const vnode = view({name: ''}, viewHandler);
updateDOM(vnode);  