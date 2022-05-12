import MyComponent from '../../../../slices/HomeServices';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeServices'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_services","items":[{"title":[{"type":"paragraph","text":"Anim proident commodo cupidatat pariatur est. Commodo officia exercitation et in culpa. Aliquip eu ea tempor exercitation consequat excepteur labore commodo.","spans":[]}],"services":[{"type":"paragraph","text":"Duis do labore voluptate minim cupidatat nostrud cupidatat laborum occaecat ullamco tempor occaecat eiusmod ad.","spans":[]}]},{"title":[{"type":"paragraph","text":"In ullamco minim culpa aliqua in deserunt.","spans":[]}],"services":[{"type":"paragraph","text":"Nostrud esse eiusmod aliquip nisi veniam proident id occaecat cillum minim aliqua fugiat fugiat id.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Utilize web-enabled infrastructures","spans":[]}],"description":[{"type":"paragraph","text":"Dolore aliquip dolor qui velit proident esse enim dolore dolor est occaecat. Sunt dolore velit excepteur labore ut ullamco ullamco laboris quis do reprehenderit minim irure. Incididunt deserunt ex labore.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
