<script>
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
    }
  }

</script>


<template>

  <AppMain></AppMain>

</template>


<style scoped lang="scss">


</style>
