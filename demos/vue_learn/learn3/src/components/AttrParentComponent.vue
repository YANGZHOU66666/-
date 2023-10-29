<template>
    <h3>AttributeParent</h3>
    <AttrComponent class="attr"/><!--透传attribute-->
</template>
<script>
import AttrComponent from './AttrComponent.vue';
export default {
    components:{
        AttrComponent,
    }
}
</script>