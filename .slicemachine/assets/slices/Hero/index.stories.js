import MyComponent from '../../../../slices/Hero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Hero'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero","items":[],"primary":{"title":[{"type":"heading1","text":"Orchestrate rich relationships","spans":[]}],"description":[{"type":"paragraph","text":"Laborum labore deserunt tempor voluptate anim proident sint mollit ea consequat. Est minim occaecat proident non labore reprehenderit velit cillum veniam. Officia Lorem cillum ullamco consequat tempor.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
