<template>
  <section>
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />
    <prismic-image :field="slice.primary.image" />
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
      <prismic-rich-text :field="item.title" />
      <prismic-rich-text :field="item.services" />
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