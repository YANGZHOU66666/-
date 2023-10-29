<template>
    <h3>Main</h3>
    <SearchComponent @searchEvent="getSearch"/>
    <p>{{ message }}</p>
</template>
<script>
import SearchComponent from './SearchComponent.vue';
export default {
    components:{
        SearchComponent,
    },
    data(){
        return{
            message:""
        }
    },
    methods:{
        getSearch(search){
            this.message=search;
        }
    }

}
</script>