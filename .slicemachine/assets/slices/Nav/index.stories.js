import MyComponent from '../../../../slices/Nav';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Nav'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"nav","items":[],"primary":{"title":[{"type":"heading1","text":"Deploy web-enabled blockchains","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit dolor irure cupidatat nulla cillum exercitation mollit in irure deserunt amet. Ullamco fugiat sunt laborum. Do voluptate aliquip duis nisi consequat nostrud voluptate magna sunt cillum deserunt veniam voluptate laborum laborum.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
