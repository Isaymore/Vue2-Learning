import axios from "axios"
import { nanoid } from "nanoid"

export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                return alert('请添加王姓用户！')
            }
        },
        addPersonServe(context) {
            // const res = axios.get('https://api.uixsj.cn/hitokoto/get')
            // console.log(res, typeof res)
            axios.get('https://api.uixsj.cn/hitokoto/get').then(
                response => {
                    console.log(response, typeof response)
                    console.log(response.data, typeof response.data)
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                }
            )

        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON方法被调用了')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [{
            id: '001',
            name: '张三'
        }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}
