<script>
    // importo axios per poterne ususfruire in questo componente
    import axios from "axios"
    // importo lo store
    import { store } from '../store';

    export default {
        data() {
            return {
                // dichiaro lo store per poterlo usare in pagina
                store,
            }
        },

        methods : {

            // funzione dedicata alla ricerca con al suo interno delle chiamate axios
            eseguiRicerca() {

                // dichiaro in una variabile la stringa che si dovrà usarre tramite axios (.get('')) --- in questo caso creata per eseguire una ricerca sui film
                let ricercaFilm = this.store.Uri + this.store.searchOfMovie + this.store.ApiKey + this.store.querySearch + this.store.search
                // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                axios.get(ricercaFilm).then((res) => {
                    // assegnamo all'array creato e dedicato a contenre i film restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                    this.store.resultsSearchFilms = res.data.results
                })

                // dichiaro in una variabile la stringa che si dovrà usarre tramite axios (.get('')) --- in questo caso creata per eseguire una ricerca sule serie tv
                let ricercaTv = this.store.Uri + this.store.searchTv + this.store.ApiKey + this.store.querySearch + this.store.search
                    // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                    axios.get(ricercaTv).then((res) => {
                    // assegnamo all'array creato e dedicato a contenre le serie tv restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                    this.store.resultsSearchTv = res.data.results
                })

                // dichiaro in una variabile la stringa che si dovrà usarre tramite axios (.get('')) --- in questo caso creata per eseguire una ricerca multipla/generale
                let ricercaMista = this.store.Uri + this.store.searchMulti + this.store.ApiKey + this.store.querySearch + this.store.search
                    // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                    axios.get(ricercaMista).then((res) => {
                    // assegnamo all'array creato e dedicato a contenre i risultati restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                    this.store.resultsMista = res.data.results
                })
            }
        }
    }
</script>

<template>
    <!-- container search che è l'input e il bottone di ricerca che vedrà e usera l'utente per la ricerca -->
    <div class="container-search">
        <!-- input collegato con il v-model all'attributo 'search' in store per che prende -->
                <!-- al rilascio del tasto enter della tastiera parte la funzione di ricerca che fa le chiamate axios -->
        <input v-model="store.search" @keyup.enter="eseguiRicerca()" type="text">
        <!-- bottone di ricerca che al click con il mouse fa partire la funzione di ricerca con le chiamate axios -->
        <button @click="eseguiRicerca()" ><i class="fa-solid fa-magnifying-glass"></i></button>
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

    // --------------------
    // parte css per la gestione della search bar animata
    .container-search :is(input , button) {
        background: transparent;
        color: inherit;
        border: none;
        outline: none;
    }

    input {
        width: 0;
        transition:  width 0.5s;
    }

    button {
        display: grid;
        place-items: center;
        width: 50px;
        height: 25px;
        cursor: pointer;
        transition: color .25s;
    }

    .container-search:hover input,
    .container-search:focus-within input {
        padding-left: 5px;
        width: 200px;
    }
    // parte css per la gestione della search bar animata
    // --------------------

</style>