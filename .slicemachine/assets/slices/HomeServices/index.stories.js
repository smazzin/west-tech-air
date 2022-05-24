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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_services","items":[{"title":[{"type":"paragraph","text":"Pariatur sit sit adipisicing exercitation proident occaecat aliqua consequat aliqua aliqua dolore aliqua cupidatat.","spans":[]}],"services":[{"type":"paragraph","text":"Ex aute voluptate voluptate aliquip.","spans":[]}]},{"title":[{"type":"paragraph","text":"Anim nisi anim minim dolore consequat Lorem eiusmod deserunt nisi amet esse eiusmod esse ipsum. Eu mollit veniam officia cillum reprehenderit.","spans":[]}],"services":[{"type":"paragraph","text":"Tempor elit fugiat consequat sint commodo irure eiusmod eu ullamco consequat voluptate amet ad id nulla.","spans":[]}]},{"title":[{"type":"paragraph","text":"Officia occaecat tempor adipisicing nisi cupidatat irure anim duis fugiat commodo culpa quis. Tempor non ullamco proident nulla in veniam.","spans":[]}],"services":[{"type":"paragraph","text":"Ullamco officia est dolore id irure velit ea esse proident nulla ullamco laboris. Cupidatat quis excepteur Lorem ex nisi laborum non.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Incentivize sexy models","spans":[]}],"description":[{"type":"paragraph","text":"Pariatur enim id minim enim ullamco. In dolor ut exercitation aliqua id ea reprehenderit excepteur ex ullamco. Duis tempor minim nisi et amet sunt aute sit fugiat.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
