<template>
  <div id="app">
      <p>
        Number of 'asd' todos: {{numberOfTodos}}
      </p>
      <p>
        These are our todos: {{todos | implode}} 
        <!-- ['asd', 'test', 'test'] -> asd, test, test -->
      </p>
      <div v-for="(todo, i) in todos" :key="i">
        {{i + 1}} 
        
        {{todo | appendTextToAsdTodos}}
        
        <button @click="removeTodo(i)">remove TODO</button>
      </div>
    <!--                                e.target.value -->
      <moq-input @addTodo="addTodo" placeholder="Toq input e za todota" v-model="todoText"></moq-input>
      {{todoText}}
  </div>
</template>
<script>
import todoInput from './components/TodoInput'
import localMixin from './localMixin'
export default {
    components: {
      'moq-input': todoInput
    },
    data(){
        return {
            todos: [],
            todoText: ''
        }
    },
    mixins: [localMixin],
    methods: {
      addTodo(){
        this.todos.push(this.todoText)
        this.todoText = ''
      },
      removeTodo(i){
        this.todos.splice(i, 1)
        this.numberOfTodos = []
      }
    },
    computed: {
        numberOfTodos() {
            return this.todos.filter(todo => todo == 'asd').length
        }
    },
    filters: {
      appendTextToAsdTodos(v, textToAppend = ' <- Tova e asd todo'){
          return v == 'asd' ? v + textToAppend : v
      }
    }
}
</script>