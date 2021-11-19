<template>
  <div id="app">
    <TodoList :todos="todos" @delete-todo="deleteTodo"/>
    <div>Test git</div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default{
  name: "app",
  data(){
    return {
      todos: ['Первый','Второй','Третый']
    }
  },
  components: {
    TodoList
  },
  methods: {
    deleteTodo(index){
      this.todos.splice(index, 1);
    }
  }
}

</script>
<style scoped>
  #app {
    display: block;
    padding: 30px;
    margin: 0 auto;
    margin-top: 50px;
    background:rgba(209, 95, 95, 0.192);
    max-width: 1000px;
  }
</style>