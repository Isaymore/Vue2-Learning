const countOption = {
    namespaced: true,
    actions: {
        addOdd(context, value) {
            console.log(context)
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
        },

    },
    mutations: {
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
        },
    },
    state: {
        sum: 0,
        city: '广州',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
export default countOption