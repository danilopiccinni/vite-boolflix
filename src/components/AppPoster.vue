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
                } else if (lingua == 'ja') {
                    lingua = 'jp'
                } else if (lingua == 'ko') {
                    lingua = 'kr'
                }
                 else if (lingua == '') {
                    lingua = 'sconosciuta'
                }

                return lingua
            },

        }
    }
</script>

<template>

    <div class="poster">


            <img v-if="film.poster_path != null" :src="store.UriImage + store.posterImgSize+film.poster_path" alt="">
            <img v-else :src="store.UriImage + store.posterImgSize + store.alternativeImage" alt="">

    <div class="container-info">
        <div v-if="film.title">
            <em>Titolo:</em>
            <span>{{ film.title }}</span>
        </div>
        <div v-else-if="film.name">
            <em>Titolo:</em>
            <span>
                {{ film.name }}
            </span>
        </div>

        <div v-if="film.original_title">
            <em>Titolo originale:</em>
            <span>{{ film.original_title }}</span>
        </div>
        <div v-else-if="film.original_name">
            <em>Titolo originale:</em>
            <span>
                {{ film.original_name }}
            </span>
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


    </div>

</template>

<style scoped lang="scss">



    .fa-star,
    .fa-star-half {
        color: gold;
    }

    .poster {
        position: relative;

        background-color: black;


        width: calc(100% / 5 - 15px / 5 * 4);

        padding: 10px 0;
        margin: 5px 0;

        img {
            max-width: 100%;
            aspect-ratio: 1 / 1;
            object-fit:contain;
            object-position: top;


        }
    }

    .container-info {
        position: absolute;
        top: 0;
        left: 0;

        display: none;

        padding: 10px 15px;
        
    }

    .poster:hover img{
        opacity: 0.3;
    }

    .poster:hover .container-info{
        display: block;
    }

</style>