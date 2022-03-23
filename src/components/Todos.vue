<template>
  <div>
    <h3 class="mb-5">All Todos ({{ countTodos }})</h3>
    <div class="todos">
      <div
        v-for="todo in allTodos"
        :key="`todo_key_${todo.id}`"
        class="todo alert alert-success d-flex align-items-center"
      >
        {{ todo.title }}

        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt ml-auto"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: mapGetters(["allTodos", "countTodos"]),
  created() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
};
</script>
  

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo i {
  color: rgb(238, 6, 91);
  cursor: pointer;
}
/* .todo {
  border: 1px solid #ccc;
  background-color: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
} */
</style>