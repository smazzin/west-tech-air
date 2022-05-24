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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"contact_form","items":[],"primary":{"title":[{"type":"paragraph","text":"Dolor incididunt sunt do veniam proident. Mollit enim nulla adipisicing irure ea.","spans":[]}],"description":[{"type":"paragraph","text":"Veniam dolore enim minim irure qui do Lorem elit sint minim aliqua officia id duis. Magna id irure cupidatat ullamco commodo reprehenderit nulla cupidatat.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
