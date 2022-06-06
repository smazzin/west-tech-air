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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"page_title","items":[],"primary":{"title":[{"type":"paragraph","text":"Exercitation officia sint dolor proident consectetur laboris sint laborum eiusmod fugiat quis. Do ipsum aliqua qui ad qui magna minim commodo sint ad ea quis Lorem. Id irure ad nostrud aute magna cupidatat magna eiusmod sunt.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
