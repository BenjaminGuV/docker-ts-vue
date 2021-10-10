<template>
    <tr>
        <td>{{ index + 1 }}</td>
        <td>{{ todo }}</td>
        <td>
            <button @click="$emit('removeTodo', index)" class="btn btn-danger btn-block">Eliminar todo</button>
        </td>
    </tr>
</template>

<script lang="ts">
import {Vue, Prop, Component} from 'vue-property-decorator';

@Component

export default class TodoList extends Vue{
    @Prop() todo!: string;
    @Prop() index!: number;

}

</script>
