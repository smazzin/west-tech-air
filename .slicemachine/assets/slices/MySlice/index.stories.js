import MyComponent from '../../../../slices/MySlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MySlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"my_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Harness real-time methodologies","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit adipisicing enim ea deserunt proident dolore labore culpa. Nulla aute exercitation irure cupidatat ullamco culpa. Veniam sint excepteur est anim tempor do.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
