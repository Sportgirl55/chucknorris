<template>
  <div class="container">
    <div class="search">
      <div class="search__wrap">
        <input
          class="search__input"
          type="text"
          minlength="3"
          placeholder="Search jokes..."
          v-model="keyword"
          @input="searchJoke"
          ref="inputRef"
        />
        <button
          class="search__clear-button"
          @click="clearInputAndStore"
          aria-label="Очистить"
          :class="{ show: keyword.length > 1 }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <span class="search__joke-counter">Found jokes: {{ jokeCounter }}</span>
    </div>

    <div class="jokes">
      <span v-if="error" class="error">{{ error }}</span>
      <Results :data="jokesData" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import store from "./store";
import Results from "./components/Results.vue";

const jokesData = computed(() => store.state.searchedJokes);
const jokeCounter = computed(() => store.state.jokeCounter);
const error = computed(() => store.state.error);

const keyword = ref("");
const inputRef = ref(null);

function searchJoke() {
  if (keyword.value.length >= 3) {
    store.dispatch("searchJoke", keyword.value);
  }
}
function clearInputAndStore() {
  keyword.value = "";
  store.dispatch("clearJokes");
}

onMounted(() => inputRef.value.focus());

watch(keyword, (newValue) => !newValue.length && clearInputAndStore());
</script>
