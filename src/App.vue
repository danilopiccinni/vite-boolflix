<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store';

  export default {
    data() {
      return {
        store,
        nome : 'danilo'
      }
    },

    components : {
      AppMain,
      AppHeader,
    }
  }

</script>


<template>

  <AppHeader></AppHeader>

  <AppMain></AppMain>

</template>


<style scoped lang="scss">


</style>
