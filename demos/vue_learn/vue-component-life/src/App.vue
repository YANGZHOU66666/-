<template>
  <h3>组件生命周期应用</h3>
  <p ref="name">百战程序员</p>
  <Main/>
</template>
<script>
/*
生命周期函数：
创建期：beforeCreate  created(组件创建完成)
挂载期：beforeMounte Mounted(完成渲染)
更新期：beforeUpdate updated(数据更新，再次渲染 的 循环)
销毁期：beforeUnmounte  unmounted(组件销毁)
*/
import UserComponent from './components/UserComponent.vue';
import MyComponent from './components/MyComponent.vue';
import Main from './components/Main.vue';
export default {
  components:{
    Main,
    UserComponent,
    MyComponent,
  },
  data(){
    return{
      message:"更新之前",
    }
  },
  methods:{
    updateHandle(){
      this.message="更新之后";
    }
  },
  beforeMount(){
    console.log(this.$refs.name);
  },
  mounted(){
    console.log(this.$refs.name);
  },
}
</script>