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
                // let ricerca = 'https://api.themoviedb.org/3/search/multi?api_key=b528c7aa813cfc570c3b175c2311ee69&query=star+wars '
                // let ricerca = this.store.Uri + this.store.searchMulti + this.store.ApiKey + this.store.querySearch + this.store.search
                let ricercaFilm = this.store.Uri + this.store.searchOfMovie + this.store.ApiKey +this.store.richiestalinguaggio + this.store.languageIalian + this.store.querySearch + this.store.search
                axios.get(ricercaFilm).then((res) => {
                    console.log(res)
                    this.store.resultsSearchFilms = res.data.results
                    console.log(this.store.resultsSearchFilms)
                })
                
                let ricercaTv = this.store.Uri + this.store.searchTv + this.store.ApiKey + this.store.querySearch + this.store.search
                    axios.get(ricercaTv).then((res) => {
                    this.store.resultsSearchTv = res.data.results
                    console.log(this.store.resultsSearchTv)
                })

                // let ricerca = 'https://api.themoviedb.org/3/search/multi?api_key=b528c7aa813cfc570c3b175c2311ee69&query=' + this.store.search 
                let ricercaMista = this.store.Uri + this.store.searchMulti + this.store.ApiKey + this.store.querySearch + this.store.search
                    axios.get(ricercaMista).then((res) => {
                    this.store.resultsMista = res.data.results
                    console.log(this.store.resultsMista)
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

    .container-search {
        display: inline-flex;
        align-items: center;

        border-radius: 4px;
        background-color: white;
        color: black;

    }

    .container-search :is(input , button) {
        background: transparent;
        color: inherit;
        border: none;
        outline: none;
    }

    input {
        width: 0;

        transition:  width 0.5s;;
    }

    button {
        display: grid;
        place-items: center;
        width: 50px;
        height: 25px;
        cursor: pointer;
        transition: color .25s;
    }

    .container-search:hover input {
        padding-left: 5px;
        width: 200px;
    }

</style>