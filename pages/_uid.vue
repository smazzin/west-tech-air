<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
  <slice-zone type="page" :uid="$route.params.uid" />
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("page", params.uid)
    if (document) {
      return {document}
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
          content: this.document.data.meta_description
        }
      ]
    }
  }
};
</script>
