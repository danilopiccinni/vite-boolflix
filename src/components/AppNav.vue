<script>
    export default {
        data() {
            return {
                navLinks : [
                    'Home',
                    'Serie TV',
                    'Film',
                    'Nuovi e popolari',
                    'La mia lista',
                    'Sfoglia per lingua'
                ]
            }
        }
    }
</script>

<template>
    <nav>
        <ul>
            <li v-for="link in navLinks"> {{ link }} </li>
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

</style>