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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"call_to_action_image","items":[],"primary":{"title":[{"type":"heading1","text":"Envisioneer front-end bandwidth","spans":[]}],"description":[{"type":"paragraph","text":"Laboris sunt sit labore aliquip anim amet mollit deserunt id labore enim proident. Quis est officia elit eiusmod voluptate aliquip eu tempor et. Laborum voluptate sit enim occaecat sit magna irure.","spans":[]}],"buttonText":"evolve revolutionary e-services","buttonlink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
