<script>

    import AppPoster from './AppPoster.vue'

    import { store } from '../store';

    export default {
        data() {
            return {
                store,

            }
        },

        components : {

            AppPoster,
        },

    }
</script>


<template>
    
    <!-- main -->
    <main>
        <!-- contenitore dei risultati da visualizzare in pagina  che verrà visuaizzata o meno in base all'index attivo-->
        <div v-if="store.resultsSearchFilms.length > 0 && store.active == 2" class="container">
            <!-- titolo che indica il tipo di risultati che si sta visualizzando -->
            <strong class="search-title">Movies</strong>
            <!-- container delle copertine dei risultato ciclati -->
            <div class="container-poster">
                <!-- componente figlio 'AppPoster' che cicla i rislutati ottenuti tramite la ricerca contenuti nell'apposito array nello 'store' -->
                <AppPoster v-for="film in store.resultsSearchFilms" :film="film" ></AppPoster>
            </div>
        </div>

        <!-- contenitore dei risultati da visualizzare in pagina  che verrà visuaizzata o meno in base all'index attivo-->
        <div v-if="store.resultsSearchTv.length > 0 && store.active == 1" class="container">
            <!-- titolo che indica il tipo di risultati che si sta visualizzando -->
            <strong class="search-title">Series</strong>
            <!-- container delle copertine dei risultato ciclati -->
            <div class="container-poster">
                <!-- componente figlio 'AppPoster' che cicla i rislutati ottenuti tramite la ricerca contenuti nell'apposito array nello 'store' -->
                <AppPoster v-for="serie in store.resultsSearchTv" :film="serie"></AppPoster>
            </div>
        </div>

        <!-- contenitore dei risultati da visualizzare in pagina  che verrà visuaizzata o meno in base all'index attivo-->
        <div v-if="store.resultsMista.length > 0 && store.active == 0" class="container">
            <!-- titolo che indica il tipo di risultati che si sta visualizzando -->
            <strong class="search-title">All</strong>
            <!-- container delle copertine dei risultato ciclati -->
            <div class="container-poster">
                <!-- componente figlio 'AppPoster' che cicla i rislutati ottenuti tramite la ricerca contenuti nell'apposito array nello 'store' -->
                <AppPoster v-for="result in store.resultsMista" :film="result"></AppPoster>
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