<template>
  <section class="wave-featured-image">
    <div class="wave-featured-image-divider"></div>
    <div class="container grid-2 align-items-center mt-5">
      <div>
        <prismic-rich-text :field="slice.primary.title" class="title text-white-base" />
        <prismic-rich-text :field="slice.primary.description" class="text-white-base" />
      </div>
      <div>
        <prismic-image :field="slice.primary.image" class="ml-auto" />
      </div>
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