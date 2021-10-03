<template>
    <div id="main">
        <h2>Hola</h2>
        <div>
            <Home :person="person"></Home>
        </div>
    </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import { Component, Vue } from 'vue'
import { Vue, Component } from 'vue-property-decorator'
import Home from './components/home.vue'
import Person from './models/person'

@Component({
    components: { Home }
})
export default class App extends Vue {
    private person: Person = new Person();
}
</script>
