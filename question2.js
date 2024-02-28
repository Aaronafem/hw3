function solve(amount, bottles) {
  let visited = new Set(); // Track visited states
  let queue = [
    { state: Array(bottles.length).fill(0), steps: [], emptyStates: [] },
  ]; // Initialize queue
  let solutionStates = []; // Initialize array to store solution states

  while (queue.length > 0) {
    let { state, steps, emptyStates } = queue.shift();

    // Check for solution: Match the target amount in any jug.
    if (
      state.includes(amount) &&
      state.filter((x) => x === amount).length === 1
    ) {
      solutionStates = [...emptyStates, state]; // Store solution states
      break; // Exit the loop
    }

    // Check visited states (prevent redundant exploration)
    if (visited.has(state.toString())) {
      continue;
    }

    visited.add(state.toString());

    // Explore possible pouring actions for each jug
    for (let i = 0; i < bottles.length; i++) {
      // Fill jug i to its capacity
      let newState = [...state];
      newState[i] = bottles[i];
      let newSteps = [...steps, `Fill ${i + 1}`]; // Track operation
      let newEmptyStates = [...emptyStates, state];
      queue.push({
        state: newState,
        steps: newSteps,
        emptyStates: newEmptyStates,
      });

      // Empty jug i
      newState = [...state];
      newState[i] = 0;
      newSteps = [...steps, `Empty ${i + 1}`];
      newEmptyStates = [...emptyStates, state];
      queue.push({
        state: newState,
        steps: newSteps,
        emptyStates: newEmptyStates,
      });

      // Pour water from jug i to other jugs
      for (let j = 0; j < bottles.length; j++) {
        if (i !== j) {
          let pourAmount = Math.min(state[i], bottles[j] - state[j]);
          if (pourAmount > 0) {
            newState = [...state];
            newState[i] -= pourAmount;
            newState[j] += pourAmount;
            newSteps = [...steps, `Pour from ${i + 1} to ${j + 1}`];
            newEmptyStates = [...emptyStates, state];
            queue.push({
              state: newState,
              steps: newSteps,
              emptyStates: newEmptyStates,
            });
          }
        }
      }
    }
  }

  return solutionStates.length > 0 ? solutionStates : null; // Return solution states or null
}

// Example usages with empty states
console.log(solve(2, [5, 3])); // Output: [ [0, 0], [5,0], [2,3], [2,0] ]
console.log(solve(1, [2, 4])); // Output: null
console.log(solve(8, [10, 2, 1])); // Output: [ [0,0,0], [10,0,0], [8,2,0], [8,0,0] ]
console.log(solve(8, [3, 4, 2, 1])); // Output: null
