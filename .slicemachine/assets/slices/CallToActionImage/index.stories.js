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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"call_to_action_image","items":[],"primary":{"title":[{"type":"heading1","text":"E-enable bleeding-edge web-readiness","spans":[]}],"description":[{"type":"paragraph","text":"Eu mollit velit velit consequat. Do do pariatur magna.","spans":[]}],"buttonText":"reinvent transparent deliverables","buttonlink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
