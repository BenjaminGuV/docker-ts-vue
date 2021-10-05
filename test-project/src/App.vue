<template>
    <div id="main">
        <h2>Hola</h2>
        <div>
            <Home :person="person"></Home>
        </div>
        <div>
            <h2>{{ fullName }}</h2>
            <button @click="click()">Hey click</button>
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

    name: string = 'Samanta'
    lastname: string = 'Laras'

    get fullName(): string {
        return `${this.name} ${this.lastname}`
    }

    click(){
        alert(1);
    }

    mounted(){
        console.log("start");
    }

    destroyed(){
        console.log("destroyed");
    }

}
</script>
