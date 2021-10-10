<template>
    <div>
        <TodoForm @newTodo="newTodo($event)" />
        <hr>

        <button @click="removeTodoAll">Eliminar todo</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TASK</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody v-if="todos.length > 0">
                <TodoList @removeTodo="removeTodo(index)" :todo="todo" :index="index" v-for="(todo, index) in todos" :key="index"/>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="3">
                        No hay datos
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

@Component({
    components:{
        TodoForm,
        TodoList
    }
})
export default class Todo extends Vue{
    todos: Array<any> = [];

    newTodo( todo: any ){
        this.todos.push(todo)
    }

    removeTodo(index: number){
        this.todos.splice(index, 1)
    }

    removeTodoAll(){
        this.todos = []
    }

}


</script>
