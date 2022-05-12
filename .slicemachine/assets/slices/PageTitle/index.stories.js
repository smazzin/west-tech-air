import MyComponent from '../../../../slices/PageTitle';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PageTitle'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"page_title","items":[],"primary":{"title":[{"type":"paragraph","text":"Ullamco cupidatat Lorem ex mollit esse irure veniam quis sint do ad cillum incididunt.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
