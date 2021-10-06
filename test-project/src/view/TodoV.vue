<template>
    <div>
        <Todo />
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Todo from '../components/Todo.vue';

@Component({
    components:{
        Todo
    }
})
export default class TodoV extends Vue{
    

}


</script>
