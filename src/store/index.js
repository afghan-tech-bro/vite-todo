import { createStore } from 'vuex';

export default new createStore({
  state: {
    id: 0,
    todoList: [],
    doneList: [],
    user: {
      email: '',
      displayName: '',
      uid: ''
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user
    },
    addTodo: (state, todo) => {
      state.id++
      state.todoList.push({id: state.id, name: todo})
    },
    finish: (state, id) => {
      const idx = state.todoList.findIndex(item => item.id === id)
      if (idx !== -1) {
        state.doneList.push(state.todoList[idx])
        state.todoList.splice(idx, 1)
      }
    },
    remove: (state, id) => {
      const idx = state.doneList.findIndex(item => item.id === id)
      if (idx !== -1) {
        state.doneList.splice(idx, 1)
      }
    },
  },
  actions: {},
  getters: {
    getEmail: (state) => {
      return state.user.email
    },
  }
});