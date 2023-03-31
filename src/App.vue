<script>
// importo il componente AppHeader e AppMain
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// / importo il componente AppHeader e AppMain

// importo lo store 
import { store } from './store';

  export default {
    data() {
      return {
        // dichiaro lo store importato per usarlo in pagina
        store,
      }
    },

    // dichiaro i componenti importati per usarli in template
    components : {
      AppMain,
      AppHeader,
    }
  }

</script>


<template>

  <!-- header (componente importato) -->
  <AppHeader></AppHeader>

  <!-- main (componente importato) -->
  <AppMain></AppMain>

</template>


<style scoped lang="scss">


</style>
