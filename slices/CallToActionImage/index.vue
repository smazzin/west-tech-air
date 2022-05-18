<template>
  <section class="container mb-5">
    <div class="grid-2 align-items-center">
      <div class="text-center pb-2">
        <h3 class="text-small">
          {{ $prismic.asText(slice.primary.title) }}
        </h3>
        <!-- <prismic-rich-text :field="slice.primary.title" /> -->
        <prismic-rich-text :field="slice.primary.description" class=""/>
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