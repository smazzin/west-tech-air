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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"call_to_action_image","items":[],"primary":{"title":[{"type":"heading1","text":"Enhance global metrics","spans":[]}],"description":[{"type":"paragraph","text":"Minim amet nisi deserunt elit labore laboris. Sint velit incididunt excepteur minim nisi culpa mollit reprehenderit incididunt reprehenderit. Ea ex nulla sunt incididunt cillum incididunt et sunt deserunt non aute pariatur dolore.","spans":[]}],"buttonText":"incubate sticky convergence","buttonlink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
