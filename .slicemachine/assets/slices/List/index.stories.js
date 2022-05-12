import MyComponent from '../../../../slices/List';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/List'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"list","items":[],"primary":{"list":[{"type":"paragraph","text":"Proident nisi tempor reprehenderit cillum exercitation ex occaecat esse. Eu ex aliqua sit magna ex minim cillum veniam.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
