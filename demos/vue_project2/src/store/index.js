import { createStore } from "vuex";
const store=createStore({
    state:{
        isCollapse:false,
    },
    mutations:{
        updateIsCollapse(state, payload){
            state.isCollapse=!state.isCollapse;
        }
    }
});
export default store