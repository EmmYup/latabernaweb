<template>
<div class="home">
  <slide></slide>
  <deals></deals>
  <about></about>
</div>
</template>

<script>
import Slide from './Slide';
import Deals from './Deals';
import About from './About';

export default {
  name: 'home',
  components: {
    Slide,
    Deals,
    About,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
