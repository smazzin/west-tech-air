import MyComponent from '../../../../slices/ContactForm';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContactForm'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"contact_form","items":[],"primary":{"title":[{"type":"paragraph","text":"Laborum dolore veniam dolor commodo commodo do officia eu incididunt. Labore labore exercitation sunt occaecat elit minim eiusmod enim magna in.","spans":[]}],"description":[{"type":"paragraph","text":"In incididunt minim ea cupidatat esse eiusmod laborum eiusmod excepteur ipsum quis ipsum fugiat. Tempor in ad enim in aliquip ut pariatur in qui ipsum voluptate consectetur Lorem.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
