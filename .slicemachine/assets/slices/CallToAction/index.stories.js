import MyComponent from '../../../../slices/CallToAction';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CallToAction'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Morph mission-critical relationships","spans":[]}],"text":[{"type":"paragraph","text":"Velit qui in fugiat cillum ullamco exercitation excepteur occaecat non adipisicing sint pariatur aliquip. Quis nulla minim et minim proident eiusmod cupidatat exercitation amet labore dolore labore nisi laborum adipisicing.","spans":[]}],"PhoneNumber":"unleash clicks-and-mortar e-tailers"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
