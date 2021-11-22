<template>
  <div id="app">
    <TodoList  :todos="todos" @delete-todo="deleteTodo"/>
    <input v-model.lazy="messages" placeholder="edit me" ref="input" v-on:keyup.enter="addTodos"/>
    <button class="btn" @click="addTodos">Add</button>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default{
  name: "app",
  data(){
    return {
      todos: ['Первый','Второй','Третый'],
      messages: ''
    }
  },
  components: {
    TodoList
  },
  methods: {
    deleteTodo(index){
      this.todos.splice(index, 1);
    },
    addTodos(){
      if(this.messages != ""){
        this.todos.push(this.messages);
        this.$refs['input'].value = "";
        this.messages = "";
      }
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
  input  {
    font-size: 18px;
    padding: 10px 20px;
    border: 0;
    outline: 0;
  }
  button {
    font-size: 18px;
    padding: 10px 20px;
    background: #eee;
    border: 0;
    cursor: pointer;
  }
  
</style>