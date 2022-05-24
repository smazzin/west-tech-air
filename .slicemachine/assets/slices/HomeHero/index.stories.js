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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_hero","items":[],"primary":{"title":[{"type":"heading1","text":"Scale interactive partnerships","spans":[]}],"description":[{"type":"paragraph","text":"Aliqua fugiat ipsum nulla quis nisi fugiat irure in adipisicing consectetur in ex fugiat commodo.","spans":[]}],"buttonText":"architect 24/7 e-commerce","buttonLink":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
