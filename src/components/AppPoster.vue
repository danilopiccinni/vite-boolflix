<script>
    // importo 'flag-icons' per la gestione associazione lingua-bandiere 
    import "/node_modules/flag-icons/css/flag-icons.min.css";
    // importo lo store
    import { store } from '../store';
import axios from "axios";

    export default {
        data() {
            return {

                show: true,
                attori : [],

                // dichiaro lo store
                store,

                // stelline da visualizzare
                voti : [
                    '<i class="fa-solid fa-star-half"></i>', //voto 1 (mezza stella)
                    '<i class="fa-solid fa-star"></i>',   //voto 2 (una stella)
                    '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>', //voto 3 (una stella e meza)
                    '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>', //voto 4 (due stelle)
                    '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>', //voto 5 (due stelle e mezza)
                    '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',  //voto 6 (tre stelle)
                    '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>', // voto 7 (tre stelle e mezza)
                    '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>', // voto 8 (quattro stelle)
                    '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></i><i class="fa-solid fa-star-half"></i>', // voto 9 ( quattro stelle e mezza)
                    '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></i><i class="fa-solid fa-star"></i>', // voto 10 (cinque stelle)
                ]
            }
        },

        props: {
            // uso una props per passarmi un oggetto dal componente padre
            film : Object,
        },

        methods : {
            // funzione che fa un controllo sulla presenza della lingua e fixxa certe mancanze o discordanze 
            controllaLingua() {
                // assegna a una variabile l'abbreviazione della lingua 
                let lingua = this.film.original_language

                if (lingua == 'en') {  // fix lingua inglese
                    lingua = 'gb'
                } else if (lingua == 'ja') {  //fix lingua japponese
                    lingua = 'jp'
                } else if (lingua == 'ko') {  // fix lingua koreana
                    lingua = 'kr'
                }
                 else if (lingua == '') {  //in caso la lingua sia sconosciuta o non indicata
                    lingua = 'sconosciuta'
                }
                // ritorna la variabile/abbreviazione corretta nel caso si presentava il caso
                return lingua 
            },

            // funzione che ciene richiamata per la visualizazzione del voto
            inserisciVoto() {
                // crea una costante che prende il valore arrotondato del voto del film/risultato della ricerca
                const voto = Math.round(this.film.vote_average)
                // ritorna le stelline da visualizzare dall'array di stelline dando come indice il valore del voto '-1' per far coincidere la posizione
                return this.voti[voto - 1]

            },

            ricercaDettagli() {
                if (this.show) {
                    this.show = false
                } else {
                    this.show = true
                }
                axios.get('https://api.themoviedb.org/3/movie/'+this.film.id+'/credits?api_key=b528c7aa813cfc570c3b175c2311ee69').then((res) => {
                    console.log(res)
                    // this.attori = res.data.cast
                    if (this.attori.length == 0) {
                        for (let i = 0 ; i < 5 ; i++) {
                            this.attori.push(res.data.cast[i].name)
                        }
                    }
                })

                axios.get('https://api.themoviedb.org/3/tv/'+this.film.id+'/credits?api_key=b528c7aa813cfc570c3b175c2311ee69').then((res) => {
                    console.log(res)
                    // this.attori = res.data.cast
                    if (this.attori.length == 0) {
                        for (let i = 0 ; i < 5 ; i++) {
                            this.attori.push(res.data.cast[i].name)
                        }
                    }
                })

            }
        }
    }
</script>

<template>

    <!-- contenitore dell'intero poster -->
    <div @click="ricercaDettagli()" class="poster">
        <!-- visualizziamo l'immagine di copertina con un 'v-if' di controllo se ci sia un immagine da visualizzare-->
        <img v-if="film.poster_path != null" :src="store.UriImage + store.posterImgSize+film.poster_path" alt="">
        <!-- visualizziamo un immagine alternativa nel caso non si hanno immagini a disposizione -->
        <img v-else :src="store.UriImage + store.posterImgSize + store.alternativeImage" alt="" class="alternative-image">
        
            <!-- contenitore generale delle info riguardanti il risultato -->
            <div class="container-info">

                <div v-show="show">
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
                        <!-- voto visualizzato richiamando una funzione che gestisce la trasformazione del voto in stelline -->
                         <span class="voto" v-html="inserisciVoto()"></span>
                    </div>
                    
                    <!-- contenitore che conterrà il tipo di risultato ottenuto (film,serie,persona.ecc) quando si effettua una ricerca multipla -->
                    <div>
                        <strong>{{ film.media_type }}</strong>
                    </div>

                </div>

                <div v-show="!show">
                    <ul>
                        <li v-for="attori in attori"> {{attori}}</li>
                    </ul>
                </div>
                
            </div>
    </div>

</template>

<style scoped lang="scss">



    .voto {
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