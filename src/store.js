import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
  	title : 'todo-list',
  	links: [

    ],
    dones: [
    'yeahS',
    ],
    mssg: 'completed Tasks'
  },
  getters: {
    countLinks: state => {
      return state.links.length
    },
    countDones: state => {
      return state.dones.length
    }
  },
  mutations: {
  	ADD_LINK: (state, link) => {
      state.links.push(link)
  	},
  	REMOVE_LINK: (state, link) => {
  	  state.links.splice(link, 1)
  	},
  	EDIT_LINK: (state, link, yeah) => {
  		state.links.splice(link, 1)
  	  state.links.push(yeah)
  	},
  	REMOVE_ALL: (state) => {
  		state.links = []
  	},
  	ADD_DONE: (state, done, link) => {
      state.dones.push(done)
      state.links.splice(link, 1)
  	},
  	REMOVE_DONE: (state) => {
  		state.dones = []
  	},
  	REMOVE_ONE: (state, done) => {
  	  state.dones.splice(done, 1)
  	},
  },
  actions: {
  	removeLink: (context, link) => {
  		context.commit("REMOVE_LINK", link)
  	},
  	removeAll ({commit}) {
  	   return new Promise((resolve, reject) => {
  	   	 setTimeout(() => {
  	   	 	commit('REMOVE_ALL')
  	   	 	resolve()
  	   	 },	500)
  	   })
  	},
  	removeDone ({commit}) {
  	   return new Promise((resolve, reject) => {
  	   	 setTimeout(() => {
  	   	 	commit('REMOVE_DONE')
  	   	 	resolve()
  	   	 },	500)
  	   })
  	}
  },
  plugins: [vuexLocal.plugin]
})

