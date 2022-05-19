import MyComponent from '../../../../slices/ContactForm';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContactForm'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"contact_form","items":[],"primary":{"title":[{"type":"paragraph","text":"Minim minim laboris occaecat commodo elit incididunt aliquip nostrud exercitation. Commodo aute duis eu est voluptate qui laboris ex nostrud eu irure.","spans":[]}],"description":[{"type":"paragraph","text":"Cillum enim ex mollit velit eu qui officia enim non.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
