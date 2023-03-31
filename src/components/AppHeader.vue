<script>
    // importo i componenti figli
    import AppNav from './AppNav.vue';
    import AppSearch from './AppSearch.vue';
    // imporot lo store
    import { store } from '../store';

    export default {
        data() {
            return {
                // dichiaro lo store per poi poterlo usare in questo componente
                store,
            }
        },

        components : {
            // dichiaro i componenti che voglio utilizzare nel template
            AppSearch,
            AppNav,
        }
    }
</script>

<template>
    <!-- header -->
    <header>
        <!-- contenitore sinistro dell'header -->
        <div class="header-sx">
            <!-- immagine logo della webapp -->
            <img :src="store.UriImage + store.posterImgSize + store.alternativeImage" alt="">

            <!-- navbar componente (AppNav) -->
            <AppNav></AppNav>

        </div>

        <!-- contenitore destro dell'header -->
        <div class="header-dx">
            <!-- componente della ricerca (AppSearch) -->
            <AppSearch></AppSearch>
            <!-- icona notifiche -->
            <i class="fa-regular fa-bell"></i>
            <!-- icona profilo -->
            <i class="fa-solid fa-user"></i>
        </div>
    </header>
    

</template>

<style scoped lang="scss">

    header {
        position: fixed;
        z-index: 1;

        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 68px;
        padding: 0 50px;

        background-color: black;

        .header-sx {
            display: flex;
            align-items: center;
            gap: 45px;

            img {
                max-width: 100px;
                max-height: 80%;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        .header-dx {
            display: flex;
            align-items: center;
            gap: 40px;

            padding-right: 35px;

            i {
                font-size: 22px;
                color: white;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
</style>