<template>
  <section class="container">
    <prismic-rich-text :field="slice.primary.title" />
    <prismic-rich-text :field="slice.primary.description" />
  </section>
</template>

<script>
export default {
  name: "Content",
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