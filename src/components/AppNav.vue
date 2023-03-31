<script>
// importo lo store
import { store } from '../store';

    export default {
        data() {
            return {
                // dichiaro lo store per usarlo in pagina
                store,

                // link/pulsanti/ancor da visualizzare nella nav
                navLinks : [
                    'Home',
                    'Serie TV',
                    'Film',
                    'Nuovi e popolari',
                    'La mia lista',
                    'Sfoglia per lingua'
                ]
            }
        },

        methods : {
            // funzione che passare il valore a 'index' dichiarato nello 'store' per poterlo usare in tutto il documento
            giveActive(index) {
                // gli diamo l'index riferito al link della nav cliccato passato come parametro alla chiamata della funzione
                this.store.active = index
            }
        }
    }
</script>

<template>
    <!-- nav -->
    <nav>
        <!-- lista dei link  -->
        <ul class="nav-list">
            <!-- 'li' genaretai con un v-for per ogni valore (link/pulsanti) dell'array che popolerà la navbar -->
                                                 <!-- al click richiamiamo la funzione per il passaggio dell'index-->
                                                                                <!-- tramite interpolazione (:src) assegniamo una classe 'active' che controlla quale sia attualmente il link/pulsante attivo -->
            <li v-for="(link,index) in navLinks" @click="giveActive(index)" :class="store.active == index ? 'active' : ''" class="nav-li">{{ link }}</li>
        </ul>
    </nav>
        
</template>

<style scoped lang="scss">

    .nav-list {
        display: flex;
        gap: 15px;

        list-style-type: none;

        .nav-li {
            color: #d7d7d7;
            font-size: 14px;
            font-weight: bold;

            padding: 15px 0;

            &:hover {
                color: white;
                cursor: pointer;
            }
        }
    }

    .active {
        color: white;
    }

</style>