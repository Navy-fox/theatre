<template>
  <div class="project-card">card info</div>
</template>

<script>
export default {
  name: "project-card",
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
