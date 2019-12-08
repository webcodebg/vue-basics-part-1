<template>
<div>
      <input type="text" :value="value" @input="emitValue" :placeholder="placeholder" @keydown.enter="addTodoAndRemoveText">
</div>
</template>
<script>
export default {
    props: {
        value: {
            required: true
        },
        placeholder: {
            required: false,
            default: 'Todo input'
        }
    },
    methods: {
        addTodoAndRemoveText(){
            this.$emit('addTodo')
            this.$emit('input', '')
        },
        emitValue(e){
            this.$emit('input', e.target.value)
        }
    }
}
</script>