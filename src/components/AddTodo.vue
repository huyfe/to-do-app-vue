<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <div class="form-group d-flex">
          <input
            type="text"
            class="form-control w-50 rounded-0"
            v-model="title"
            placeholder="Add Todo..."
          />
          <input
            class="btn btn-success rounded-0"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit() {
      console.log(this.title);
      this.addTodo(this.title);
    },
  },
};
</script>