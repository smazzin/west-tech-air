<template>
  <section class="home-hero">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />
    <prismic-link :field="slice.primary.buttonLink">
      {{ slice.primary.buttonText }}
    </prismic-link>
  </section>
</template>

<script>
export default {
  name: "HomeHero",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>

</style>