import MyComponent from '../../../../slices/CallToActionImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CallToActionImage'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"call_to_action_image","items":[],"primary":{"title":[{"type":"heading1","text":"Strategize integrated relationships","spans":[]}],"description":[{"type":"paragraph","text":"Deserunt duis culpa tempor officia eiusmod fugiat labore nisi nulla eu duis. Ullamco aliquip exercitation sint occaecat tempor consequat velit cillum id.","spans":[]}],"buttonText":"e-enable frictionless content","buttonlink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
