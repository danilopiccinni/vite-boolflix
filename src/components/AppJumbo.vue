<script>
import axios from 'axios';
    import { store } from '../store';

    export default {
        data() {
            return {
                store,

                show: false,
                attori : [],
                IdGeneriIndividuati : [],
                generiIndividuatiDaVedere : [],
            }
        },

        methods : {
            raccogliInfo() {
                if (this.IdGeneriIndividuati.length == 0) {
                this.IdGeneriIndividuati = this.store.activeObjectJumbo.genre_ids
                    for (let i = 0; i < this.store.genre_ids.length ; i++) {
                        if (this.IdGeneriIndividuati.includes(this.store.genre_ids[i].id)) {
                            this.generiIndividuatiDaVedere.push (this.store.genre_ids[i].name)
                        }
                    }
                }

                if (this.show) {
                    this.show = false
                } else {
                    this.show = true
                }


                if (this.store.activeObjectJumbo.title) {
                        axios.get('https://api.themoviedb.org/3/movie/'+this.store.activeObjectJumbo.id+'/credits?api_key=b528c7aa813cfc570c3b175c2311ee69').then((res) => {
                            if (this.attori.length == 0) {
                                for (let i = 0 ; i < res.data.cast.length ; i++) {
                                    if (this.attori.length<5) {
                                        this.attori.push(res.data.cast[i].name)
                                    }
                                }
                            }
                        })
                    } else if (this.store.activeObjectJumbo.name) {
                        axios.get('https://api.themoviedb.org/3/tv/'+this.store.activeObjectJumbo.id+'/credits?api_key=b528c7aa813cfc570c3b175c2311ee69').then((res) => {
                            if (this.attori.length == 0) {
                                for (let i = 0 ; i < res.data.cast.length ; i++) {
                                    if (this.attori.length < 5) {
                                        this.attori.push(res.data.cast[i].name)
                                    }
                                }
                            }
                        })
                    }
            }
        }
    }
</script>

<template>
    <div v-if="store.activeObjectJumbo.vuoto != 'vuoto'"  class="jumbo" @click="raccogliInfo()">
        <!-- visualizziamo l'immagine di copertina con un 'v-if' di controllo se ci sia un immagine da visualizzare-->
        <img v-if="store.activeObjectJumbo.backdrop_path != null" :src="store.UriImage + 'w500' +store.activeObjectJumbo.backdrop_path" alt="">
        <!-- visualizziamo un immagine alternativa nel caso non si hanno immagini a disposizione -->
        <img v-else :src="store.UriImage + store.posterImgSize + store.alternativeImage" alt="" class="alternative-image">

        <div v-if="show" class="info">
                    <div>
                        <strong>Attori:</strong>
                        <ul>
                            <li v-for="attori in attori"> {{attori}}</li>
                        </ul>
                    </div>

                    <hr>
                    <hr>

                    <div>
                        <strong>Fa parte di:</strong>
                        <ul>
                            <li v-for="(generi,index) in generiIndividuatiDaVedere">
                            <em>Genere {{ index+1 }}:</em> <strong>{{ generi }}</strong> </li>
                        </ul>
                    </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.jumbo {
    display: flex;
    justify-content: center;
    padding: 100px 0;
}

img {
    width: 100%;
    max-height: 400px;
}

ul {
    list-style-type: none;
}

</style>