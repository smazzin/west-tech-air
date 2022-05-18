<template>
  <div class="wave-cta">
    <prismic-rich-text :field="slice.primary.title" class="container text-center text-white-base"/>
    <figure class="wave-cta-bottom-divider"></figure>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
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