<template lang="pug">
  Configurator
</template>

<script>

// import axios from 'axios';
// import { EventBus } from "./event-bus";
import Configurator from './components/Configurator.vue';
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    'Configurator': Configurator
  }
}
</script>

<style lang="scss">
@import './css/styles.scss';

</style>
