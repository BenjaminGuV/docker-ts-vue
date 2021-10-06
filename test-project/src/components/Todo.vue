<template>
    <div>
        <Todoform />
        <hr>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TASK</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody v-if="todos.length > 0">
                <tr v-for="(todo, index) in todos" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ todo }}</td>
                    <td>
                        <button @click="removeTodo(index)" class="btn btn-danger btn-block">Eliminar todo</button>
                    </td>
                </tr>
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

@Component({
    components:{
        TodoForm
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
