import MyComponent from '../../../../slices/FeaturedImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FeaturedImage'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"featured_image","items":[],"primary":{"title":[{"type":"heading1","text":"Drive world-class solutions","spans":[]}],"description":[{"type":"paragraph","text":"Nisi sint sunt pariatur qui laboris aute dolore laboris aliqua officia incididunt irure qui excepteur.","spans":[]}],"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=727&h=402&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
