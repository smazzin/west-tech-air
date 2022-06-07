import MyComponent from '../../../../slices/HomeHero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeHero'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_hero","items":[],"primary":{"title":[{"type":"heading1","text":"Enable granular applications","spans":[]}],"description":[{"type":"paragraph","text":"Aliqua occaecat laborum irure nisi tempor aute. Aliqua amet irure sit dolore commodo ea id eiusmod fugiat.","spans":[]}],"buttonText":"target distributed e-markets","buttonLink":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
