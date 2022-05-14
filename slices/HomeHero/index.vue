<template>
  <section class="home-hero">
    <div class="container">
      <div class="home-hero-content">
        <prismic-rich-text :field="slice.primary.title" class="title" />
        <prismic-rich-text :field="slice.primary.description" />
        <prismic-link class="btn" :field="slice.primary.buttonLink">
          {{ slice.primary.buttonText }}
        </prismic-link>
      </div>
    </div>
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