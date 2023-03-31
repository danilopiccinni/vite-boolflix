<script>
import AppNav from './AppNav.vue';
import AppSearch from './AppSearch.vue';
    import { store } from '../store';

    export default {
        data() {
            return {
                store,
            }
        },

        components : {
            AppSearch,
            AppNav,
        }
    }
</script>

<template>
    <header>
        <div class="header-sx">
            
            <img :src="store.UriImage + store.posterImgSize + store.alternativeImage" alt="">

            <AppNav></AppNav>

        </div>

        <div class="header-dx">
            <AppSearch></AppSearch>

            <i class="fa-regular fa-bell"></i>
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
        }
    }

    i {
        font-size: 22px;
        color: white;

        &:hover {
            cursor: pointer;
        }
    }
</style>