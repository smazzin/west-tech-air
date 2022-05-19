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
              <prismic-link class="nav__link" :field="navLink.primary.link">
                {{ $prismic.asText(navLink.primary.label) }}
              </prismic-link>
              <ul class="sub-nav" v-if="navLink.items.length>0">
                <li class="menu-item" v-for="subNavLink in navLink.items" :key="subNavLink.id">
                  <prismic-link class="nav__link" :field="subNavLink.sub_nav_link">
                    {{ $prismic.asText(subNavLink.sub_nav_link_label) }}
                  </prismic-link>
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
        <a class="mobile-btn top-header-phone" href="#">Call Us {{ navData.data.phone }}</a>
      </div>
      <div class="schedule-service-cta">
        <a class="mobile-btn" href="#">
          {{ navData.data.buttonText }}
        </a>
      </div>
    </div>
      <!-- <prismic-link :field="$store.state.buttonLinks">
        {{ $prismic.asText($store.state.buttonText) }}
      </prismic-link> -->
  </header>
</div>
</template>

<script>
export default {
  name: 'header-prismic',
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
    }
}
  // if (process.browser) {

  // }

</script>

<style scoped>
</style>