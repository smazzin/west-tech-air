import smConfig from './sm.json'
import axios from 'axios'
import {
  getPrismicRedirects,
  prismicRedirects,
} from './plugins/createRedirects'
getPrismicRedirects()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "slice-library-starter-nuxt",
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      hid: "description",
      name: "description",
      content: ""
    }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/sass/style.scss'
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/prismic'],
  prismic: {
    endpoint: smConfig.apiEndpoint,
    modern: true,
    // apiOptions: {
    //   routes: [
    //     {
    //       type: 'page',
    //       path: '/:uid'
    //     }
    //   ]
    // }
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ["@nuxtjs/prismic", {
      endpoint: smConfig.apiEndpoint || "",
      apiOptions: {
        routes: [
          {
            type: 'homepage',
            path: '/',
          },
          {
            type: 'page',
            path: '/:grandparent?/:parent?/:uid',
            resolvers: {
              grandparent: 'parent.parent',
              parent: 'parent',
            },
          },
        ],
      }
    } 
  ],
  ["nuxt-sm"],
  ["@nuxtjs/sitemap"],
  ['@nuxtjs/robots']],
  sitemap: {
    hostname: 'https://westtechair-dev.netlify.app',
    gzip: true,
    exclude: [
      '/preview',
      '/slice-simulator'
    ],
    // routes: async () => {
    //   const api = await Prismic.getApi(sm.apiEndpoint)
    //   const pages = await api.query(Prismic.Predicate.at("document.type", "pages"));
    //   return [...pages.map((i) => `/${i.uid}`)];
    // },
  },
  generate: {
    fallback: '404.html', // Netlify reads a 404.html, Nuxt will load as an SPA
    routes: async function () {
      const ref = await axios.get(smConfig.apiEndpoint).then((res) => {
        for (let index = 0; index < res.data.refs.length; index++) {
          if (res.data.refs[index].isMasterRef) {
            return res.data.refs[index].ref
          }
        }
      })

      const pages = axios
        .get(
          smConfig.apiEndpoint +
          '/documents/search?ref=' +
          ref +
          '&pageSize=100&q=[[at(document.type,"page")]]&fetchLinks=page.parent#format=json'
        )
        .then((res) => {
          return res.data.results.map((doc) => {
            if (hasGrandparent(doc)) {
              return `/${doc.data.parent.data.parent.uid}/${doc.data.parent.uid}/${doc.uid}`
            } else if (hasParent(doc)) {
              return `/${doc.data.parent.uid}/${doc.uid}`
            } else {
              return `/${doc.uid}`
            }
          })
        })

      // generate routes
      return Promise.all([pages]).then((values) => {
        let array = values.join().split(',')
        return array
      })
    },
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm', '@prismicio/vue'],
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
  },
  netlifyFiles: {
    netlifyToml: {
      headers: [
        {
          for: '/*',
          values: { 'X-XSS-Protection': '1; mode=block' },
        },
      ],
      redirects: prismicRedirects,
    },
  },
}

function hasGrandparent(doc) {
  if (hasProp(doc.data.parent, 'data')) {
    if (hasProp(doc.data.parent.data, 'parent')) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

function hasParent(doc) {
  return hasProp(doc.data.parent, 'uid')
}

function hasProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}
