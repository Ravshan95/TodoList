<template>
    <ul>
        <li v-for="(todo, index) in todos" :key="index">{{ todo }} <span @click="deleteTodo(index)">-</span></li>
    </ul>
    <input type="text" :v-model="messege">
    <button class="btn" @click="messegeAdd">Добавить</button>
</template>

<script>
export default {
    props: ['todos'],
    methods: {
        deleteTodo(index){
            this.$emit('delete-todo', index);
        },
        messege(){
        }
    }
}
</script>

<style scoped>
ul {
    padding: 0;
    margin: 0;
    list-style: none;
}
ul li {
    display: flex;
    margin: 10px 0;
}
ul li span {
    margin-left: auto;
    padding: 20px;
    line-height: 1px;
    background: rgba(0, 0, 0, 0.048);
    display: block;
}
input {
    padding: 10px 20px;
    font-size: 19px;
    border: 0;
    box-shadow: 0px 0px 1px #eee;
    border-radius: 0;
}
.btn {
    padding: 10px 20px;
    background: rgba(109, 161, 131, 0.912);
    font-size: 20px;
    border: 0;
    color: white;
    cursor: pointer;
}

</style>