<template>
  <main>
    <slice-zone type="home-page" queryType="single" />
  </main>
</template>

<script>
import SliceZone from "vue-slicezone";
export default {
  name: "Homepage",
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getSingle("home-page", params)
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: "Page not found" })
    }
  },
  head() {
    return {
      title: this.document.data.meta_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.document.data.meta_description,
        }
      ]
    }
  }
};
</script>
