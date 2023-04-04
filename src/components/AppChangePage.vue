<script>
import { store } from '../store'
import axios from 'axios'
    export default {
        data() {
            return {
                store,
                counterPageFilm: 1,
                counterPageTv : 1,
                counterPageHome: 1,
            }
        },

        methods : {
            paginaAvantiFilm() {
                
                this.counterPageFilm++
                let ricercaFilm = this.store.Uri + this.store.searchOfMovie + this.store.ApiKey+ '&page='+ this.counterPageFilm + this.store.querySearch + this.store.search
                console.log(ricercaFilm)
                // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                axios.get(ricercaFilm).then((res) => {
                    console.log(res)
                    // assegnamo all'array creato e dedicato a contenre i film restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                    this.store.resultsSearchFilms = res.data.results
                    console.log(this.store.resultsSearchFilms)
                })
            },

            paginaAvantiTv() {
                    this.counterPageTv++
                    // dichiaro in una variabile la stringa che si dovrà usarre tramite axios (.get('')) --- in questo caso creata per eseguire una ricerca sule serie tv
                    let ricercaTv = this.store.Uri + this.store.searchTv + this.store.ApiKey+ '&page='+ this.counterPageTv + this.store.querySearch + this.store.search
                    // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                    axios.get(ricercaTv).then((res) => {
                    // assegnamo all'array creato e dedicato a contenre le serie tv restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                    this.store.resultsSearchTv = res.data.results
                })
            },

            paginaAvantiHome() {
                    this.counterPageHome++
                    // dichiaro in una variabile la stringa che si dovrà usarre tramite axios (.get('')) --- in questo caso creata per eseguire una ricerca multipla/generale
                    let ricercaMista = this.store.Uri + this.store.searchMulti + this.store.ApiKey+ '&page='+ this.counterPageHome + this.store.querySearch + this.store.search
                    // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                    axios.get(ricercaMista).then((res) => {
                    // assegnamo all'array creato e dedicato a contenre i risultati restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                    this.store.resultsMista = res.data.results
                })
            },
            paginaIndietroFilm() {
                if (this.counterPageFilm !=1) {
                    this.counterPageFilm--
                    let ricercaFilm = this.store.Uri + this.store.searchOfMovie + this.store.ApiKey+ '&page='+ this.counterPageFilm + this.store.querySearch + this.store.search
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
                if (this.counterPageTv !=1) {
                        this.counterPageTv--
                        // dichiaro in una variabile la stringa che si dovrà usarre tramite axios (.get('')) --- in questo caso creata per eseguire una ricerca sule serie tv
                        let ricercaTv = this.store.Uri + this.store.searchTv + this.store.ApiKey+ '&page='+ this.counterPageTv + this.store.querySearch + this.store.search
                        // faccio la chiamata axios sulla 'stringa/link' API che dopo aver fatto la richiesta ci restituisce un risultato 'res' che è sempre un oggetto
                        axios.get(ricercaTv).then((res) => {
                        // assegnamo all'array creato e dedicato a contenre le serie tv restituiti dalla ricerca trovando nell'oggetto 'res' l'array che contiene effettivamente quello che cerchiamo
                        this.store.resultsSearchTv = res.data.results
                    })
                }
            },

            paginaIndietroHome() {
                if (this.counterPageHome !=1) {
                        this.counterPageHome--
                        // dichiaro in una variabile la stringa che si dovrà usarre tramite axios (.get('')) --- in questo caso creata per eseguire una ricerca multipla/generale
                        let ricercaMista = this.store.Uri + this.store.searchMulti + this.store.ApiKey+ '&page='+ this.counterPageHome + this.store.querySearch + this.store.search
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
        <button @click="paginaIndietroHome()">indietro</button>
        <button @click="paginaAvantiHome()">avanti</button>
    </div>

    <div v-if="store.active == 1" class="container">
        <button @click="paginaIndietroTv()">indietro</button>
        <button @click="paginaAvantiTv()">avanti</button>
    </div>
    
    <div v-if="store.active == 2" class="container">
        <button @click="paginaIndietroFilm()">indietro</button>
        <button @click="paginaAvantiFilm()">avanti</button>
    </div>
        
</template>

<style scoped lang="scss">

</style>