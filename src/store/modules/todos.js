import axios from 'axios';

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo one'
        },
        {
            id: 2,
            title: 'Todo two'
        }
    ]
};
const getters = {
    allTodos: state => state.todos,
    countTodos: state => state.todos.length ?? 0,
};
const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        // console.log(response);
        commit('setTodos', response.data);
    },
    async addTodo({ commit }) {
        // const 
    }
};
const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
};

export default {
    state,
    getters,
    actions,
    mutations
}