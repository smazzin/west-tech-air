<template>
  <div class="container my-5">
    <!-- <ul class="breadcrumbs">
      <li class="breadcrumb">
        <nuxt-link :to="homeDoc.path">{{ homeDoc.title }}</nuxt-link>
      </li>
      <li class="separator">/</li>
      <li v-if="hasGrandparent" class="breadcrumb">
        <prismic-link :field="currentDoc.data.parent.data.parent">
          {{ $prismic.asText(currentDoc.data.parent.data.parent.data.title) }}
        </prismic-link>
      </li>
      <li v-if="hasGrandparent" class="separator">/</li>
      <li v-if="hasParent" class="breadcrumb">
        <prismic-link :field="currentDoc.data.parent">
          {{ $prismic.asText(currentDoc.data.parent.data.title) }}
        </prismic-link>
      </li>
      <li v-if="hasParent" class="separator">/</li>
      <li class="breadcrumb">
        <span>{{ $prismic.asText(currentDoc.data.title) }}</span>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: {},
      routesWithLinks: [],
      finalRoutes: [],
      path: '',
    }
  },
  jsonld() {
    const items = this.finalRoutes.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item[0],
        name: item[1],
      },
    }));
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };
  },
  created() {
    this.routes = this.$route.fullPath.substring(1).split('/');
    let current = this.$config.baseURL;
    this.routes.forEach((route, index) => {
      if(route != 'en'){
        this.path = index == 0 ? current + this.path + '/' + route : this.path + '/' + route
        this.finalRoutes.push([this.path, route]);
      }
    })
  },
  props: {
    currentDoc: {
      type: Object,
      required: true,
    },
    homeDoc: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasGrandparent() {
      if (this.hasProp(this.currentDoc.data.parent, 'data')) {
        if (this.hasProp(this.currentDoc.data.parent.data, 'parent')) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    hasParent() {
      return this.hasProp(this.currentDoc.data.parent, 'data')
    },
  },
  methods: {
    hasProp(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop)
    },
  },
  // head () {
  //   return {
  //     link: [
  //       {
  //         hid: 'canonical',
  //         rel: 'canonical',
  //         href: this.$config.baseURL + this.$route.path
  //       }
  //     ],
  //   }
  // }
}
</script>

<style lang="postcss" scoped>

</style>
