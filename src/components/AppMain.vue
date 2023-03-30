<script>
    import AppPoster from './AppPoster.vue'
    import AppSearch from './AppSearch.vue';


    import { store } from '../store';

    export default {
        data() {
            return {
                store,
            }
        },

        components : {
            AppSearch,
            AppPoster,
        }
    }
</script>


<template>
    <div>

        <AppSearch></AppSearch>

    </div>
    <div class="container-poster">
    
        <AppPoster v-for="film in store.resultsSearch" :film="film" ></AppPoster>

    </div>


</template>


<style scoped lang="scss">

    .container-poster {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        padding: 10px;
    }

</style>