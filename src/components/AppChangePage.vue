<script>
import { store } from '../store'
import axios from 'axios'
    export default {
        data() {
            return {
                store,
            }
        },

        methods : {
            paginaAvantiFilm() {
                let ricercaFilm;
                if (this.store.counterPageFilm < this.store.totalPageFilm) {
                    this.store.counterPageFilm = this.store.counterPageFilm + 1
                    if (this.store.search == '') {
                        ricercaFilm = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b528c7aa813cfc570c3b175c2311ee69&page=' + this.store.counterPageFilm
                    } else {
                        ricercaFilm = this.store.Uri + this.store.searchOfMovie + this.store.ApiKey+ '&page='+ this.store.counterPageFilm + this.store.querySearch + this.store.search
                    }
                    console.log(ricercaFilm)
                    // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                    axios.get(ricercaFilm).then((res) => {
                        console.log(res)
                        // assegnamo all'array creato e dedicato a contenre i film restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                        this.store.resultsSearchFilms = res.data.results
                        console.log(this.store.resultsSearchFilms)
                    })
                }
            },

            paginaAvantiTv() {
                let ricercaTv;
                if (this.store.counterPageTv < this.store.totalPageTv) {
                    this.store.counterPageTv++
                    if(this.store.search == '') {
                        ricercaTv = 'https://api.themoviedb.org/3/trending/tv/day?api_key=b528c7aa813cfc570c3b175c2311ee69&page=' + this.store.counterPageTv
                    } else {
                        ricercaTv = this.store.Uri + this.store.searchTv + this.store.ApiKey+ '&page='+ this.store.counterPageTv + this.store.querySearch + this.store.search
                    }
                    // dichiaro in una variabile la stringa che si dovrà usarre tramite axios (.get('')) --- in questo caso creata per eseguire una ricerca sule serie tv
                    // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                    axios.get(ricercaTv).then((res) => {
                    // assegnamo all'array creato e dedicato a contenre le serie tv restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                    this.store.resultsSearchTv = res.data.results
                })
                }
            },

            paginaAvantiHome() {
                let ricercaMista;
                if (this.store.counterPageHome < this.store.totalPageMista) {
                    this.store.counterPageHome++
                    if(this.store.search == ''){
                        ricercaMista = 'https://api.themoviedb.org/3/trending/all/day?api_key=b528c7aa813cfc570c3b175c2311ee69&page=' + this.store.counterPageHome
                    } else {
                        ricercaMista = this.store.Uri + this.store.searchMulti + this.store.ApiKey+ '&page='+ this.store.counterPageHome + this.store.querySearch + this.store.search
                    }
                    // dichiaro in una variabile la stringa che si dovrà usarre tramite axios (.get('')) --- in questo caso creata per eseguire una ricerca multipla/generale
                    // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                    axios.get(ricercaMista).then((res) => {
                    // assegnamo all'array creato e dedicato a contenre i risultati restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                    this.store.resultsMista = res.data.results
                })
                }
            },
            paginaIndietroFilm() {
                let ricercaFilm;
                if (this.store.counterPageFilm !=1) {
                    this.store.counterPageFilm--
                    if (this.store.search == '') {
                        ricercaFilm = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b528c7aa813cfc570c3b175c2311ee69&page=' + this.store.counterPageFilm
                    } else {
                        ricercaFilm = this.store.Uri + this.store.searchOfMovie + this.store.ApiKey+ '&page='+ this.store.counterPageFilm + this.store.querySearch + this.store.search
                    }
                     console.log(ricercaFilm)
                    // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                    axios.get(ricercaFilm).then((res) => {
                        console.log(res)
                        // assegnamo all'array creato e dedicato a contenre i film restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                        this.store.resultsSearchFilms = res.data.results
                        console.log(this.store.resultsSearchFilms)
                    })
                }
            },

            paginaIndietroTv() {
                let ricercaTv
                if (this.store.counterPageTv !=1) {
                        this.store.counterPageTv--
                        if(this.store.search == '') {
                        ricercaTv = 'https://api.themoviedb.org/3/trending/tv/day?api_key=b528c7aa813cfc570c3b175c2311ee69&page=' + this.store.counterPageTv
                    } else {
                        ricercaTv = this.store.Uri + this.store.searchTv + this.store.ApiKey+ '&page='+ this.store.counterPageTv + this.store.querySearch + this.store.search
                    }  // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                        axios.get(ricercaTv).then((res) => {
                        // assegnamo all'array creato e dedicato a contenre le serie tv restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                        this.store.resultsSearchTv = res.data.results
                    })
                }
            },

            paginaIndietroHome() {
                let ricercaMista
                if (this.store.counterPageHome !=1) {
                        this.store.counterPageHome--
                        if(this.store.search == ''){
                        ricercaMista = 'https://api.themoviedb.org/3/trending/all/day?api_key=b528c7aa813cfc570c3b175c2311ee69&page=' + this.store.counterPageHome
                    } else {
                        ricercaMista = this.store.Uri + this.store.searchMulti + this.store.ApiKey+ '&page='+ this.store.counterPageHome + this.store.querySearch + this.store.search
                    }      
                     // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                        axios.get(ricercaMista).then((res) => {
                        // assegnamo all'array creato e dedicato a contenre i risultati restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                        this.store.resultsMista = res.data.results
                    })
                }
            },
        }
    }
</script>

<template>

    <div v-if="store.active == 0" class="container">
        <button @click="paginaIndietroHome()"><i class="fa-solid fa-circle-arrow-left"></i></button>
        <span>Page: {{ store.counterPageHome }} of {{ store.totalPageMista }}</span>
        <button @click="paginaAvantiHome()"><i class="fa-solid fa-circle-arrow-right"></i></button>
    </div>

    <div v-if="store.active == 1" class="container">
        <button @click="paginaIndietroTv()"><i class="fa-solid fa-circle-arrow-left"></i></button>
        <span>Page: {{ store.counterPageTv }} of {{ store.totalPageTv }}</span>
        <button @click="paginaAvantiTv()"><i class="fa-solid fa-circle-arrow-right"></i></button>
    </div>
    
    <div v-if="store.active == 2" class="container">
        <button @click="paginaIndietroFilm()"><i class="fa-solid fa-circle-arrow-left"></i></button>
        <span>Page: {{ store.counterPageFilm }} of {{ store.totalPageFilm }}</span>
        <button @click="paginaAvantiFilm()"><i class="fa-solid fa-circle-arrow-right"></i></button>
    </div>
        
</template>

<style scoped lang="scss">

    .container {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        gap: 10px;

        button {
            background-color: transparent;
            border-radius: 50%;
        }
    }

</style>