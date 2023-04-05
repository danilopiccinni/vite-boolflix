<script>
    import { store } from '../store';

    export default {
        data() {
            return {
                store,
            }
        }
    }
</script>

<template>
    <div v-if="store.activeObjectJumbo.name != 'vuoto'"  class="jumbo">
        <!-- visualizziamo l'immagine di copertina con un 'v-if' di controllo se ci sia un immagine da visualizzare-->
        <img v-if="store.activeObjectJumbo.backdrop_path != null" :src="store.UriImage + 'w500' +store.activeObjectJumbo.backdrop_path" alt="">
        <!-- visualizziamo un immagine alternativa nel caso non si hanno immagini a disposizione -->
        <img v-else :src="store.UriImage + store.posterImgSize + store.alternativeImage" alt="" class="alternative-image">
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

</style>