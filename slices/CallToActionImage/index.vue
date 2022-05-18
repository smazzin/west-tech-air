<template>
  <section class="container mb-5">
    <div class="grid-2 align-items-center">
      <div class="pb-2">
          <!-- {{ $prismic.asText(slice.primary.title) }} -->
        <prismic-rich-text :field="slice.primary.title" />
        <prismic-rich-text :field="slice.primary.description" class="pb-2"/>
          <prismic-link :field="slice.primary.buttonlink" class="btn">
            {{ slice.primary.buttonText }}
          </prismic-link>
      </div>
      <div>
        <prismic-image :field="slice.primary.image" class="ml-auto" />
      </div>
    </div>
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