import MyComponent from '../../../../slices/FeaturedProjects';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FeaturedProjects'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"featured_projects","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Veniam excepteur exercitation ad anim nisi reprehenderit.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Proident eu id duis ad proident dolore laboris consectetur magna veniam laborum enim ut ad cillum.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Id nisi nostrud adipisicing enim laboris id commodo velit cillum. Cupidatat veniam non excepteur esse dolor reprehenderit consequat fugiat velit aliqua. Mollit nulla voluptate laborum cillum ex nisi excepteur commodo ipsum non aliquip laborum cillum et ullamco.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"heading1","text":"Exploit impactful e-markets","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
