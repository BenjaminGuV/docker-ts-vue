<template>
    <h2>Home</h2>
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