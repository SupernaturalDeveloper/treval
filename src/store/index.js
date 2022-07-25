import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        homeCityName: {
            name: "北京",
            id: 1
        }
    },
    mutations: {
        changeHomeCityName (state, params) {
            Object.assign(state.homeCityName, params)
        }
    },
    actions: {
        changeHomeCityName (context, { params }) {
            // console.log(context, params)
            context.commit("changeHomeCityName", params);

        }
    },
    getters: {},
    modules: {}
})