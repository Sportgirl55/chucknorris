export function setSearchedJokes(state, jokes) {
  state.searchedJokes = jokes;
}

export function setJokeCounter(state, count) {
  state.jokeCounter = count;
}

export function clearJokes(state) {
  state.jokeCounter = 0;
  state.searchedJokes = [];
  state.error = null;
}

export function setError(state, error) {
  state.error = error;
}
