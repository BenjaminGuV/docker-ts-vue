<template>
    <form>
        <input type="text" v-model="person.name" />
        {{person.name}}
    </form>
</template>

<script lang="ts">
    import Person from '../models/person'
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component({})
    export default class Home extends Vue {
        @Prop()
        public person!: Person;
    }
</script>