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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"content","items":[],"primary":{"description":[{"type":"paragraph","text":"Eiusmod amet tempor incididunt duis adipisicing labore eiusmod nulla in consectetur tempor. Eu mollit nisi cillum enim consectetur occaecat reprehenderit nisi exercitation laboris.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
