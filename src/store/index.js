import { createStore, createLogger  } from 'vuex';
import {
  getFirestore,
  addDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  setDoc,
  getDocs,
  where,
  serverTimestamp
} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import db from '../firebase'
import _ from 'lodash'

const myPluginWithSnapshot = store => {
  let prevState = _.cloneDeep(store.state)
  store.subscribe((mutation, state) => {
    let nextState = _.cloneDeep(state)

    // compare `prevState` and `nextState`...

    // save state for next mutation
    prevState = nextState
  })
}

const logger = createLogger({
  collapsed: false, // auto-expand logged mutations
  filter (mutation, stateBefore, stateAfter) {
    // returns `true` if a mutation should be logged
    // `mutation` is a `{ type, payload }`
    return mutation.type !== "aBlocklistedMutation"
  },
  actionFilter (action, state) {
    // same as `filter` but for actions
    // `action` is a `{ type, payload }`
    return action.type !== "aBlocklistedAction"
  },
  transformer (state) {
    // transform the state before logging it.
    // for example return only a specific sub-tree
    return state.subTree
  },
  mutationTransformer (mutation) {
    // mutations are logged in the format of `{ type, payload }`
    // we can format it any way we want.
    return mutation.type
  },
  actionTransformer (action) {
    // Same as mutationTransformer but for actions
    return action.type
  },
  logActions: true, // Log Actions
  logMutations: true, // Log mutations
  logger: console, // implementation of the `console` API, default `console`
})

export default new createStore({
  state: {
    id: 0,
    todoList: [],
    doneList: [],
    user: null,
  },
  mutations: {
    setUser: (state, user) => {
      localStorage.setItem('user', user)
      state.user = user
    },
    setData: (state) => {
      let todos = []
      let done = []
      
      getDocs(collection(db, 'users', state.user.uid, 'todos')).then(res => {
        console.log('gettodos', res.size)
        res.forEach((doc) => {
          let todo = doc.data()
          let todoHelper = todo.done ? done.push(todo) : todos.push(todo)
        })
        state.todoList = todos
        state.doneList = done
        console.log('setdata', todos, done)
      }).catch(e => {
        console.error(e)
      })
    },
    addTodo: (state, name) => {
      state.id++
      const todo = {
        id: state.id,
        name: name,
        done: false
      }
      state.todoList.push(todo)
      const todoRef = doc(db, `users`, state.user.uid, 'todos', `${state.id}`)
      setDoc(todoRef, todo)
    },
    clearData: (state) => {
      state = {}
      localStorage.setItem('user', '')
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
    register: (state, password) => {
      createUserWithEmailAndPassword(getAuth(), email, password)
      .then((res) => {
        const user = res.user
        user.displayName = displayName
        setUser(user)
        updateProfile(user, {
          displayName: displayName
        })
        .then(() => {
          console.log('Successfully registered!')
          const userRef = doc(db, 'users', user.uid)
          setDoc(userRef, {
            displayName: user.displayName,
            email: user.email,
            timestamp: serverTimestamp()
          })
        })
      })
      .catch(err => {
        alert(err.msg)
      });
    },
  },
  actions: {
    setData({ commit, state }) {
      commit('setData', state)
    },
  },
  getters: {
    getEmail: (state) => {
      return state.user?.email
    },
  },
  plugins: process.env.NODE_ENV !== 'production' ? [myPluginWithSnapshot, logger ] : []
});