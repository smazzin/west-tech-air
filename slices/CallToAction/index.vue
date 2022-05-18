<template>
  <section class="wave-cta">
    <div class="container text-center">
      <prismic-rich-text :field="slice.primary.title" class="title text-white-base" />
      <prismic-rich-text :field="slice.primary.text" class="text-white-base"/>
      <a class="btn" :href="`tel:${ slice.primary.PhoneNumber }`">{{ slice.primary.PhoneNumber }}</a>
    </div>
    <figure class="wave-cta-bottom-divider"></figure>
  </section>
</template>

<script>
export default {
  name: "CallToAction",
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