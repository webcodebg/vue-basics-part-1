<template>
  <div id="app">
      <div v-for="(todo, i) in todos" :key="i">
        {{i }} {{todo}} <button @click="removeTodo(i)">remove TODO</button>
      </div>
      <input type="text" v-model="todoText"> <button @click="addTodo">add todo</button>
  </div>
</template>
<script>


export default {
    data(){
        return {
            todos: [],
            todoText: ''
        }
    },
    methods: {
      addTodo(){
        this.todos.push(this.todoText)
        this.todoText = ''
      },
      removeTodo(i){
        this.todos.splice(i, 1)
      }
    }
}
</script>