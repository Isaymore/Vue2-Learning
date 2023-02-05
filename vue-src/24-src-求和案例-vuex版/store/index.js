import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    sum: 0,
}

// mutation是唯一修改state对象的地方
const mutations = {
    ADD(state, value) {
        console.log('mutations中的ADD方法被调用了', state, value)
        state.sum += value
    },
    SUB(state, value) {
        console.log('mutations中的SUB方法被调用了')
        state.sum -= value
    },
    ADDODD(state, value) {
        console.log('mutations中的ADDODD方法被调用了')
        state.sum += value
    },
    ADDWAIT(state, value) {
        console.log('mutations中的ADDWAIT方法被调用了')
        state.sum += value
    }
}

const actions = {
    addOdd(context, value) {
        if (context.state.sum % 2) {
            console.log('actions中的addOdd方法被调用了')
            context.commit('ADDODD', value)
        }
    },
    addWait(context, value) {
        setTimeout(() => {
            console.log('actions中的addWait方法被调用了')
            context.commit('ADDWAIT', value)
        }, 500);

    }
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
