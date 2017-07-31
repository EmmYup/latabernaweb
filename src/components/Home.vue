<template>
<div class="home">
  <deals></deals>
</div>
</template>

<script>
import Deals from './Deals';

export default {
  name: 'home',
  components: {
    Deals,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section {
    height: 100vh;
  }
</style>
