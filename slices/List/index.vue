<template>
  <prismic-rich-text :field="slice.primary.list" />
</template>

<script>
export default {
  name: "List",
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