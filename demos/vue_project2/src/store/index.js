import { createStore } from "vuex";
const store=createStore({
    state:{
        isCollapse:false,
        currentMenu:null,
        tagsList:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'home'
            }
        ]
    },
    mutations:{
        updateIsCollapse(state, payload){
            state.isCollapse=!state.isCollapse;
        },
        selectMenu(state,val){
            if(val.name==='home'){
                state.currentMenu=null;
            }else{
                state.currentMenu=val;
                let res=state.tagsList.findIndex(item=>item.name==val.name);
                if(res==-1){
                    state.tagsList.push(val);
                }
            }
        },
        closeTag(state,val){
            let index=state.tagsList.findIndex(item=>item.name==val.name);
            state.tagsList.splice(index,1);
        }
    }
});
export default store