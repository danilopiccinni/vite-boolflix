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

    <AppSearch></AppSearch>

    <AppPoster v-for="film in store.resultsSearch" :film="film" ></AppPoster>

    

</template>


<style scoped lang="scss">

</style>