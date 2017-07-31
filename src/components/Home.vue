<template>
<div class="home">
  <deals></deals>
  <about></about>
</div>
</template>

<script>
import Deals from './Deals';
import About from './About';

export default {
  name: 'home',
  components: {
    Deals,
    About,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
