<script>
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
        }
    }
</script>

<template>
    <header>
        <div class="header-sx">
            <img :src="store.UriImage + store.posterImgSize + store.alternativeImage" alt="">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Serie TV</li>
                    <li>Film</li>
                    <li>Nuovi e popolari</li>
                    <li>La mia lista</li>
                    <li>Sfoglia per lingua</li>
                </ul>
            </nav>
        </div>

        <div class="header-dx">
            <AppSearch></AppSearch>
            <i class="fa-solid fa-magnifying-glass"></i>
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

    ul {
        display: flex;
        gap: 15px;

        list-style-type: none;

        li {
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

    i {
        font-size: 22px;
        color: white;

        &:hover {
            cursor: pointer;
        }
    }
</style>