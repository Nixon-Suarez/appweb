import { createStore } from 'vuex'

export default createStore({
  state: {
    // variables globales para toda la aplicación
    usuario: null,
    token: null
  },
  getters: {
    getUsuario(state) {
      return state.usuario
    },
    getToken(state) {
      return state.token
    }
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario
    },
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    //Accion para login del usuario
    Login(context, data){
      // llenar las variables de estado
      context.commit('setUsuario', data.usuario)
      context.commit('setToken', data.token)
      // guardar en localStorage para persistencia
      localStorage.setItem('userData', JSON.stringify(data))
    },
    Logout(context){
      // limpiar las variables de estado
      context.commit('setUsuario', null)
      context.commit('setToken', null)
      // eliminar del localStorage
      localStorage.removeItem('userData')
    }
  },
  modules: {
  }
})
