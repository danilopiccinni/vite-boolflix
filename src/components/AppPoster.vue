<script>
    import "/node_modules/flag-icons/css/flag-icons.min.css";

    export default {
        data() {
            return {
                
            }
        },

        components  : {
            
        },

        props: {
            film : Object,
        },

        methods : {
            controllaLingua() {
                let lingua = this.film.original_language

                if (lingua == 'en') {
                    lingua = 'gb'
                } else if (lingua == '') {
                    lingua = 'sconosciuta'
                }

                return lingua
            }
        }
    }
</script>

<template>

    <div class="poster">

        <div v-if="film.title">
            <em>Titolo:</em>
            <span>{{ film.title }}</span>
        </div>
        <div v-else-if="film.name">
            {{ film.name }}
        </div>

        <div v-if="film.original_title">
            <em>Titolo originale:</em>
            <span>{{ film.original_title }}</span>
        </div>
        <div v-else-if="film.original_name">
            {{ film.original_name }}
        </div>
        
        <div>
            <em>Lingua originale:</em>
            <span class="fi" :class="`fi-${controllaLingua()}` "></span>
        </div>

        <div v-if="film.vote_average">
            <em>Voto:</em>
            <span>{{ parseInt(film.vote_average)  }}</span>
        </div>

        <div>
            {{ film.media_type }}
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