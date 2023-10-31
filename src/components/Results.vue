<template>
  <div
    v-for="(joke, index) of data"
    :key="joke.id"
    class="jokes__card"
    :class="cardClasses(index, 'jokes__card')"
  >
    <a
      class="jokes__content"
      :class="cardClasses(index, 'jokes__padding')"
      :href="joke.url"
      target="_blank"
    >
      <span class="jokes__text" :class="cardClasses(index, 'jokes__text')">{{
        joke.value
      }}</span>
      <div class="jokes__data">
        <span class="jokes__text">{{ joke.id }}</span>
        <span class="jokes__text">{{ formattedDate(joke.created_at) }}</span>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
});

const formattedDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return date.toLocaleDateString("ru-RU", options).replace(/\./g, ".");
};

const cardClasses = (index, baseClass) => {
  return index > 1 ? `${baseClass}_small` : `${baseClass}_big`;
};
</script>
