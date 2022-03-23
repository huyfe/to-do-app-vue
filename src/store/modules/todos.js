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
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, complete: false });
        commit('newTodo', response.data);
    },
    async deleteTodo({ dispatch, commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`,);
        commit('removeTodo', id);
    }
};
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos.filter(todo => todo.id !== id),
    // ,
};

export default {
    state,
    getters,
    actions,
    mutations
}