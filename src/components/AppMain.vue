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
        }
    }
</script>


<template>
    <main>

        <div v-if="store.resultsSearchFilms.length > 0" class="container-films">
    
            <strong>Films</strong>
            
            <div class="container-poster">
        
            
                <AppPoster v-for="film in store.resultsSearchFilms" :film="film" ></AppPoster>
        
            </div>
        </div>
    
        <div v-if="store.resultsSearchTv.length > 0" class="container-series">
    
            <strong>Series</strong>
            
            <div class="container-poster">
        
                <AppPoster v-for="serie in store.resultsSearchTv" :film="serie"></AppPoster>
        
            </div>
        </div>

        <div v-if="store.resultsMista.length > 0" class="container-series">
    
            <strong>Misto</strong>
            
            <div class="container-poster">
            
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
    }

    .container-films,
    .container-series {

        margin-bottom: 25px;


    }

    .container-poster {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;


    }

    strong {
        font-size: 30px;
    }
        

</style>