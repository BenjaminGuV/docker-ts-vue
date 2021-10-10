<template>
    <div>
        <form @submit.prevent="addTodo">
            <div class="form">
                <label for="ftodo">TODO</label>
                <input class="form-control" autocomplete="off" v-model="todo" id="ftodo">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component

export default class TodoForm extends Vue{
    todo: string = '';

    addTodo(){
        this.$emit('newTodo', this.todo);
        this.todo = '';
    }

}

</script>
