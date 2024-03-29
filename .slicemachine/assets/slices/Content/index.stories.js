import MyComponent from '../../../../slices/Content';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Content'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"content","items":[],"primary":{"description":[{"type":"paragraph","text":"Nulla non ullamco reprehenderit aliquip non anim culpa nisi.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
