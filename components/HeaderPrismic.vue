 <template>
 <div>
  <div class="bg-blue-base">
    <div class="container">
      <div class="top-header">
        <div class="service-areas">{{ navData.data.serviceArea }}</div>
        <div class="call-us">
          <a class="top-header-phone" :href="`tel:${ navData.data.phone }`">Call Us {{ navData.data.phone }}</a>
        </div>
      </div>
    </div>
  </div>
  <header class="bg-black-base" :class="{ menuActive: menuActive }">
    <div class="container">
      <div class="navbar">
        <nuxt-link to="/" class="logo">
          <prismic-image :field="$store.state.logo.image" />
        </nuxt-link>
        <nav>
          <button id="menu-toggler" data-class="menu-active" class="hamburger" @click="toggle">
              <span class="hamburger-line hamburger-line-top"></span>
              <span class="hamburger-line hamburger-line-middle"></span>
              <span class="hamburger-line hamburger-line-bottom"></span>
          </button>
          <ul id="primary-menu" class="menu nav-menu">
            <li class="menu-item" v-for="navLink in navData.data.nav" :key="navLink.id">
              <PrismicLink class="nav__link" :field="navLink.primary.link">
                {{ $prismic.asText(navLink.primary.label) }}
              </PrismicLink>
              <ul class="sub-nav" v-if="navLink.items.length>0">
                <li class="menu-item" v-for="subNavLink in navLink.items" :key="subNavLink.id">
                  <PrismicLink class="nav__link" :field="subNavLink.sub_nav_link">
                    {{ $prismic.asText(subNavLink.sub_nav_link_label) }}
                  </PrismicLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="navbar-btn-wrapper">
          <a class="btn" href="#">
            {{ navData.data.buttonText }}
          </a>
        </div>
      </div>
    </div>
    <div class="mobile-cta">
      <div class="call-us-cta">
        <a class="mobile-btn top-header-phone" :href="`tel:${ navData.data.phone }`">Call Us {{ navData.data.phone }}</a>
      </div>
      <div class="schedule-service-cta">
        <a class="mobile-btn" href="#">
          {{ navData.data.buttonText }}
        </a>
      </div>
    </div>

  </header>
</div>
</template>

<script>
export default {
  name: 'header-prismic',
    watch: {
      '$route' () {
        this.menuActive = false
      }
    },
    data() {
      return {
        navData: {},
        menuActive: false
      }
    },
    async fetch() {
      this.navData = await this.$prismic.api.getSingle('nav')
    },
    methods: {
      open() {
        this.menuActive = true;
      },
      close() {
        this.menuActive = false;
      },
      toggle() {
        if (this.menuActive) {
          this.close();
        } else {
          this.open();
        }
      }
  },
  jsonld() {
    return {
      "@context": "http://schema.org/",
      "@type": [
        "LocalBusiness",
        "Service",
        "HVACBusiness"
      ],
      "name": "West Tech Air",
      "telephone": "503-123-1234",
      "openingHours": "Mo-Fri 08:00-17:00",
      "logo": "https://elevateheatingllc.com/images/elevate-logo.png",
      "image": "https://elevateheatingllc.com/images/elevate-logo.png",
      "url": "https://elevateheatingllc.com",
      "priceRange": "$$$",
      "areaServed": [
        {
          "@type": "Place",
          "name": [
            "Helvetia, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "Bethany, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "North Plains, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "Beaverton, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "Hillsboro, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "Tualatin, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "Cornelius, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "Forest Grove, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "Tigard, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "Banks, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "King City, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "Cedar Hills, Oregon"
          ]
        },
        {
          "@type": "Place",
          "name": [
            "Aloha, Oregon"
          ]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "North Plains",
        "addressRegion": "OR",
        "postalCode": "97133"
      },
      "description": "We provide a range of services from furance repair and maintenance to installing new furnaces, air conditioning units and mini-split systems. You can also count on us for regular maintenance and tune-up services on all brands of HVAC systems.",
      "sameAs": [
        "https://www.facebook.com/#/",
        "https://www.instagram.com/#/"
      ]
    };
  },
}
  // if (process.browser) {

  // }

</script>

<style scoped>
</style>