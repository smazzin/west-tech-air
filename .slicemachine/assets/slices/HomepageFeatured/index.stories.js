import MyComponent from '../../../../slices/HomepageFeatured';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomepageFeatured'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"homepage_featured","items":[],"primary":{"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Expedite world-class platforms","spans":[]}],"description":[{"type":"paragraph","text":"Duis non nostrud eiusmod ex do.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
