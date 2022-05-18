<template>
  <section class="container mb-5">
    <prismic-rich-text :field="slice.primary.title" class="text-center mb-5 title" />
    <prismic-rich-text :field="slice.primary.description" />
    <div class="grid-3">
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="pb-2">    
        <prismic-rich-text :field="item.title" />
        <prismic-rich-text :field="item.services" />
      </div>
      <prismic-image :field="slice.primary.image" />
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeServices",
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