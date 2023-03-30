<script>
    import axios from "axios"
    import { store } from '../store';

    export default {
        data() {
            return {
                store,
            }
        },

        methods : {

            eseguiRicerca() {
                let ricerca = this.store.Uri + this.store.searchOfMovie + this.store.ApiKey + this.store.languageIalian + this.store.querySearch + this.store.search
                axios.get(ricerca).then((res) => {
                    this.store.resultsSearch = res.data.results
                    console.log(this.store.resultsSearch)
                })
            }


        }
    }
</script>

<template>

    <div class="container-search">

        <input v-model="store.search" @keyup.enter="eseguiRicerca()" type="text">
        <button @click="eseguiRicerca()" >Cerca</button>

    </div>

</template>

<style scoped lang="scss">

</style>