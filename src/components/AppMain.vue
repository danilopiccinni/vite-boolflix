<script>

    import AppChangePage from './AppChangePage.vue';

    import AppPoster from './AppPoster.vue'
    import axios from 'axios';

    import { store } from '../store';

    export default {
        data() {
            return {
                store,
            }
        },

        components : {

            AppPoster,
            AppChangePage,
        },


        created() {

            // chiamata api per avere la lista dei generi riguardanti i fulm
            axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=b528c7aa813cfc570c3b175c2311ee69').then((res) => {
                // memorizziamo la lista dei generi ricevuti come risultato dalla chiama api
                this.store.genre_ids = res.data.genres
            })

            // chiamata api riguardante la lista dei generi delle serie tv
            axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=b528c7aa813cfc570c3b175c2311ee69').then((res) => {
                // memorizziamo la lista dei generi ricevuti come risultato dalla chiama api
                this.store.tv_genre_ids = res.data.genres
            })
        },

        methods: {

            // funzione per il filtraggio per genere a cui si passa come parametro un oggetto (film o serie)
            filtra(oggetto) {
                // controlliamo se la selezione della ricerca è inclusa nei generi riguardanti l'oggetto 
                            // o che il valore del campo di seleezione sia nu null(quindi per rendere nullo il filtro)
                // se una delle due condizioni è vera il poster verrà visualizzato 
               if (oggetto.genre_ids.includes(this.store.ricercaGenere) || this.store.ricercaGenere==null ) {
                    return true
                    // altrimenti il poster non verrà visualizzato
               } else {
                return false
               }
            },
        }
    }
</script>


<template>

    
    <!-- main -->
    <main>
        <!-- contenitore dei risultati da visualizzare in pagina  che verrà visuaizzata o meno in base all'index attivo-->
        <div v-if="store.resultsSearchFilms.length > 0 && store.active == 2" class="container">
            <!-- componente per i bottoni cambio pagina -->
            <AppChangePage></AppChangePage>

            <!-- titolo che indica il tipo di risultati che si sta visualizzando -->
            <strong class="search-title">Movies</strong>
            <!-- container delle copertine dei risultato ciclati -->
            <div class="container-poster">
                <!-- componente figlio 'AppPoster' che cicla i rislutati ottenuti tramite la ricerca contenuti nell'apposito array nello 'store' -->
                                                                                <!-- controlla se il filtro di ricerca sia attivo -->
                <AppPoster v-for="film in store.resultsSearchFilms" :film="film" v-show=" filtra(film)"></AppPoster>
            </div>
        </div>

        <!-- contenitore dei risultati da visualizzare in pagina  che verrà visuaizzata o meno in base all'index attivo-->
        <div v-if="store.resultsSearchTv.length > 0 && store.active == 1" class="container">
            <!-- componente per i bottoni cambio pagina -->
            <AppChangePage></AppChangePage>

            <!-- titolo che indica il tipo di risultati che si sta visualizzando -->
            <strong class="search-title">Series</strong>
            <!-- container delle copertine dei risultato ciclati -->
            <div class="container-poster">
                <!-- componente figlio 'AppPoster' che cicla i rislutati ottenuti tramite la ricerca contenuti nell'apposito array nello 'store' -->
                                                                                                <!-- controlla se il filtro di ricerca sia attivo -->
                <AppPoster v-for="serie in store.resultsSearchTv" :film="serie" v-show="filtra(serie)"></AppPoster>
            </div>
        </div>

        <!-- contenitore dei risultati da visualizzare in pagina  che verrà visuaizzata o meno in base all'index attivo-->
        <div v-if="store.resultsMista.length > 0 && store.active == 0" class="container">
            <!-- componente per i bottoni cambio pagina -->
            <AppChangePage></AppChangePage>

            <!-- titolo che indica il tipo di risultati che si sta visualizzando -->
            <strong class="search-title">All</strong>
            <!-- container delle copertine dei risultato ciclati -->
            <div class="container-poster">
                <!-- componente figlio 'AppPoster' che cicla i rislutati ottenuti tramite la ricerca contenuti nell'apposito array nello 'store' -->
                <AppPoster v-for="result in store.resultsMista" :film="result" ></AppPoster>
            </div>
        </div>
    </main>
</template>


<style scoped lang="scss">

    main {
        height: calc(100% - 68px);
        background-color: #141414;

        padding: 80px 50px;
        .container {
            margin-bottom: 25px;
            .search-title {
                font-size: 30px;
            }
            .container-poster {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
            }
        }
    }
</style>