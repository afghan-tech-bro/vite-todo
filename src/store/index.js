import { createStore } from 'vuex';

export default new createStore({
  state: {
    id: 0,
    todoList: [],
    doneList: []
  },
  mutations: {
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
    }
  },
  actions: {},
  modules: {}
});