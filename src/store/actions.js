export function searchJoke({ commit }, keyword) {
  fetch(`https://api.chucknorris.io/jokes/search?query=${keyword}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Oooppsss... Something went wrong! Error ${res.status}`
        );
      }
      return res.json();
    })
    .then(({ result, total }) => {
      commit("setSearchedJokes", result);
      commit("setJokeCounter", total);
      commit("setError", null);
    })
    .catch((error) => {
      console.error(error);
      commit("setError", error.message);
    });
}

export function clearJokes({ commit }) {
  commit("clearJokes");
}
