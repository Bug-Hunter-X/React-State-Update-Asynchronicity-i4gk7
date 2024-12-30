# React State Update Asynchronicity Bug

This repository demonstrates a common error in React: the asynchronous nature of state updates.  The `console.log` inside the `increment` function shows the *previous* state value, not the updated one, due to how React batches updates. The solution shows how to access the updated state using functional updates.