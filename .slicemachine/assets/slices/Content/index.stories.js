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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"content","items":[],"primary":{"description":[{"type":"paragraph","text":"Sit dolore quis velit laborum in cupidatat ex consectetur pariatur commodo irure.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
