import MyComponent from '../../../../slices/HomeHero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeHero'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_hero","items":[],"primary":{"title":[{"type":"heading1","text":"Transition intuitive functionalities","spans":[]}],"description":[{"type":"paragraph","text":"Minim incididunt duis laborum nulla ea nisi irure commodo magna sunt ipsum nulla dolor aliqua. Tempor reprehenderit duis qui laborum eu nulla.","spans":[]}],"buttonText":"transition B2B solutions","buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
