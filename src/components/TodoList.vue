<template>
    <ul>
        <li v-for="(todo, index) in todos" :key="index">{{ todo }} <span @click="deleteTodo(index)">&#10006;</span></li>
    </ul>
</template>

<script>
export default {
    props: ['todos'],
    methods: {
        deleteTodo(index){
            this.$emit('delete-todo', index);
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
    width: 30px;
    height: 30px;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.048);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
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