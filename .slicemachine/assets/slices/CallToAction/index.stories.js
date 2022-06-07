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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Transition compelling content","spans":[]}],"text":[{"type":"paragraph","text":"Anim reprehenderit fugiat ut eiusmod commodo tempor velit veniam deserunt magna in elit laborum reprehenderit. Consequat labore excepteur occaecat ullamco incididunt enim dolor dolore labore duis non.","spans":[]}],"PhoneNumber":"redefine collaborative initiatives"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
