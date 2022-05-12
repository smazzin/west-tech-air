import MyComponent from '../../../../slices/ImageGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageGrid'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_grid","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Streamline ubiquitous vortals","spans":[]}],"description":[{"type":"paragraph","text":"Elit adipisicing culpa deserunt nostrud sunt laboris minim laborum nulla esse nostrud nostrud qui ex. Ut elit adipisicing amet et aliqua consequat. Exercitation est excepteur minim duis culpa ullamco culpa anim commodo fugiat ea.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
