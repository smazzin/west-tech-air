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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Scale sticky e-commerce","spans":[]}],"text":[{"type":"paragraph","text":"Sit ipsum reprehenderit sunt reprehenderit aliquip exercitation nostrud deserunt ea. Mollit consectetur qui sit sit esse Lorem veniam pariatur consectetur id duis incididunt ut officia. Velit consequat anim eiusmod Lorem dolore pariatur ea sint est ad pariatur dolor nisi consectetur.","spans":[]}],"PhoneNumber":"seize integrated initiatives"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
