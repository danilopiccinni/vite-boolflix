<script>
    import "/node_modules/flag-icons/css/flag-icons.min.css";

    import { store } from '../store';

    export default {
        data() {
            return {
                store,
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


            <img :src="store.UriImage + store.posterImgSize+film.poster_path" alt="">



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
            <i v-if="film.vote_average >= 2" class="fa-solid fa-star"></i>
                <i v-else-if="film.vote_average >= 3 && film.vote_average < 4" class="fa-solid fa-star-half"></i>
            <i v-if="film.vote_average >= 4" class="fa-solid fa-star"></i>
                <i v-if="film.vote_average >= 4 && film.vote_average < 5" class="fa-solid fa-star-half"></i>
            <i v-if="film.vote_average >= 6" class="fa-solid fa-star"></i>
                <i v-if="film.vote_average >= 6 && film.vote_average < 7" class="fa-solid fa-star-half"></i>
            <i v-if="film.vote_average >= 8" class="fa-solid fa-star"></i>
                <i v-if="film.vote_average >= 8 && film.vote_average < 9" class="fa-solid fa-star-half"></i>
            <i v-if="film.vote_average >= 10" class="fa-solid fa-star"></i>
        
        </div>

        <div>
            {{ film.media_type }}
        </div>



    </div>

</template>

<style scoped lang="scss">

    .fa-star,
    .fa-star-half {
        color: gold;
    }

    .poster {
        border: 2px dotted gray;

        width: calc(100% / 5 - 15px / 5 * 4);

        padding: 10px 0;
        margin: 5px 0;

        img {
            width: 100%;
        }
    }

</style>