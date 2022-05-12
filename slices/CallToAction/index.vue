<template>
  <section class="container text-center mb-5 p-3 bg-light-gray">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.text" />
    <a class="btn" :href="`tel:${ slice.primary.PhoneNumber }`">{{ slice.primary.PhoneNumber }}</a>
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