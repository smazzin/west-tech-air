<template>
  <section class="container grid-2 mb-5">
    <div>
      <prismic-rich-text :field="slice.primary.title" class="title" />
      <prismic-rich-text :field="slice.primary.description" />
    </div>
    <div>
      <prismic-image :field="slice.primary.image" class="ml-auto" />
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedImage",
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