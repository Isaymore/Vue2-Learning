import Vue from 'vue'
import Vuex from 'vuex'

import countOption from './count.js'
import personOption from './person'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        countAbout: countOption,
        personAbout: personOption
    }
})