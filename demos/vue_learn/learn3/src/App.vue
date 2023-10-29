<template>
  <!--<ComponentsEvent/>-->
  <Main/>
  <ComponentA/>
  <AttrParentComponent class="attr"/>
</template>
<script>
import ComponentsEvent from './components/ComponentsEvent.vue';
import Main from './components/Main.vue';
import ComponentA from './components/ComponentA.vue';
import AttrParentComponent from './components/AttrParentComponent.vue';
export default {
  components:{
    ComponentsEvent,
    Main,
    ComponentA,
    AttrParentComponent,
  }
  
}
</script>