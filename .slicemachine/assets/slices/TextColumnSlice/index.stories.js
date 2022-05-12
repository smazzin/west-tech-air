import MyComponent from '../../../../slices/TextColumnSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextColumnSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_column_slice","items":[{"title":[{"type":"paragraph","text":"Adipisicing non consequat velit aliquip aute sit sunt incididunt culpa.","spans":[]}],"description":[{"type":"paragraph","text":"Sint ea enim sunt occaecat elit voluptate qui minim cupidatat dolor tempor officia cillum. Quis fugiat nostrud non sit est quis esse.","spans":[]}],"icon":"revolutionize visionary e-tailers","background-color":"bg-gray","text-color":"text-green","link":{"link_type":"Web","url":"http://google.com"}},{"title":[{"type":"paragraph","text":"Nostrud dolor in sit. Non in culpa eiusmod laboris excepteur labore aliquip.","spans":[]}],"description":[{"type":"paragraph","text":"Laborum mollit elit sit sunt incididunt ullamco dolore elit eu laborum Lorem anim reprehenderit. Sit labore et fugiat nulla labore qui culpa voluptate laboris ipsum laboris. Sint nisi do do elit occaecat aute est.","spans":[]}],"icon":"morph visionary systems","background-color":"bg-green","text-color":"text-gray","link":{"link_type":"Web","url":"http://google.com"}},{"title":[{"type":"paragraph","text":"Commodo Lorem ea excepteur veniam nostrud sunt officia dolore ea non.","spans":[]}],"description":[{"type":"paragraph","text":"Exercitation aliquip nisi velit do aliqua aliqua ullamco exercitation amet adipisicing minim elit pariatur. Amet amet aliqua exercitation ullamco cupidatat dolor ad quis non anim culpa esse dolor ullamco.","spans":[]}],"icon":"redefine best-of-breed paradigms","background-color":"bg-navy","text-color":"text-gray","link":{"link_type":"Web","url":"http://google.com"}}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
