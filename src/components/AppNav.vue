<script>

import { store } from '../store';

    export default {
        data() {
            return {
                store,

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
            giveActive(index) {
                this.store.active = index
            }
        }
    }
</script>

<template>
    <nav>
        <ul>
            <li v-for="(link,index) in navLinks" @click="giveActive(index)" :class="store.active == index ? 'active' : ''"> {{ link }} </li>
        </ul>
    </nav>
        
</template>

<style scoped lang="scss">

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

    .active {
        color: white;
    }

</style>