<script>
    // importo 'flag-icons' per la gestione associazione lingua-bandiere 
    import "/node_modules/flag-icons/css/flag-icons.min.css";
    // importo lo store
    import { store } from '../store';

    export default {
        data() {
            return {
                // dichiaro lo store
                store,
            }
        },

        props: {
            // uso una props per passarmi un oggetto dal componente padre
            film : Object,
        },

        methods : {
            // funzione che fa un controllo sulla presenza della lingua e fixxa certe mancanze o discordanze 
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

    <!-- contenitore dell'intero poster -->
    <div class="poster">
        <!-- visualizziamo l'immagine di copertina con un 'v-if' di controllo se ci sia un immagine da visualizzare-->
        <img v-if="film.poster_path != null" :src="store.UriImage + store.posterImgSize+film.poster_path" alt="">
        <!-- visualizziamo un immagine alternativa nel caso non si hanno immagini a disposizione -->
        <img v-else :src="store.UriImage + store.posterImgSize + store.alternativeImage" alt="" class="alternative-image">
        
            <!-- contenitore generale delle info riguardanti il risultato -->
            <div class="container-info">
                <!-- contenitore del titolo/nome del film che si visualizza solo se sia un film -->
                <div v-if="film.title">
                    <span>{{ film.title }}</span>
                </div>
                <!--contenitore se il titolo/nome del risultato e se visualizza solo se sia diverso da un film-->
                <div v-else-if="film.name">
                    <span>{{ film.name }}</span>
                </div>
                
                <!-- contenitore del titolo/nome originale del film che si visualizza solo se sia un film -->
                <div v-if="film.original_title">
                    <em>({{ film.original_title }})</em>
                </div>
                <!--contenitore se il titolo/nome originale del risultato e se visualizza solo se sia diverso da un film-->
                <div v-else-if="film.original_name">
                    <em>({{ film.original_name }})</em>
                </div>
                
                <!--contenitore della lingua originale del resultato-->
                <div>
                    <em>Lingua originale:</em>
                    <!-- in cui tramite interpolazione della classe permessa da vue facciamo partire la funzione creata per la gestire le lingue che a volte non ci sono o sono scritte in modo anomalo -->
                    <span class="fi" :class="`fi-${controllaLingua()}` "></span>
                </div>
                
                <!-- contenitore dedicato alla visualizazzione delle stelline in base al voto  -->
                <div v-if="film.vote_average">
                    <em>Voto:</em>
                    <i v-if="film.vote_average == 1" class="fa-solid fa-star-half"></i>
                    <i v-if="film.vote_average == 2 || film.vote_average > 2" class="fa-solid fa-star"></i>
                    <i v-if="film.vote_average == 3" class="fa-solid fa-star-half"></i>
                    <i v-if="film.vote_average == 4 || film.vote_average > 4" class="fa-solid fa-star"></i>
                    <i v-if="film.vote_average == 5" class="fa-solid fa-star-half"></i>
                    <i v-if="film.vote_average == 6 || film.vote_average > 6" class="fa-solid fa-star"></i>
                    <i v-if="film.vote_average == 7" class="fa-solid fa-star-half"></i>
                    <i v-if="film.vote_average == 8 || film.vote_average > 8" class="fa-solid fa-star"></i>
                    <i v-if="film.vote_average == 9" class="fa-solid fa-star-half"></i>
                    <i v-if="film.vote_average == 10" class="fa-solid fa-star"></i>
                
                </div>
                
                <!-- contenitore che conterrà il tipo di risultato ottenuto (film,serie,persona.ecc) quando si effettua una ricerca multipla -->
                <div>
                    <strong>{{ film.media_type }}</strong>
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

        max-width: 200px;
        height: 300px;
        
        margin: 5px 0;

        img {
            width: 100%;
            height: 100%;
            
            object-fit: cover;

            &.alternative-image {
                object-fit: contain;
                padding: 0 10px;
            }
        }
    }

    .container-info {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

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