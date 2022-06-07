<template>
  <main>
    <header-prismic/>
    <nuxt />
    <footer-prismic/>
  </main>
</template>

<script>
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import FooterPrismic from '~/components/FooterPrismic.vue'

export default {
  components: {
    HeaderPrismic,
    FooterPrismic
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchLogo', $prismic)
    await store.dispatch('fetchFooter', $prismic)
  }
}
</script>