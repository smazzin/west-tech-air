<template>
  <section>
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />
    <prismic-link :field="slice.primary.buttonlink">
      {{ slice.primary.buttonText }}
    </prismic-link>
    <prismic-image :field="slice.primary.image" />
  </section>
</template>

<script>
export default {
  name: "CallToActionImage",
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