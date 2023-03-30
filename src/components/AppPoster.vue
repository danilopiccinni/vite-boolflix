<script>
    export default {
        data() {
            return {

            }
        },

        props: {
            film : Object,
        }
    }
</script>

<template>

    <div class="poster">

        <div>
            <em>Titolo:</em>
            <span>{{ film.title }}</span>
        </div>

        <div>
            <em>Titolo originale:</em>
            <span>{{ film.original_title }}</span>
        </div>
        
        <div>
            <em>Lingua originale:</em>
            <span>{{ film.original_language }}</span>
        </div>

        <div>
            <em>Voto:</em>
            <span>{{ film.vote_average }}</span>
        </div>


    </div>

</template>

<style scoped lang="scss">

    .poster {
        border: 2px dotted gray;

        padding: 10px 0;
        margin: 5px 0;
    }

</style>