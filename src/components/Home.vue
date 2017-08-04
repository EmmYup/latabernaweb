<template>
<div class="home">
  <slide></slide>
  <deals></deals>
  <about></about>
  <dishes></dishes>
</div>
</template>

<script>
import Slide from './Slide';
import Deals from './Deals';
import About from './About';
import Dishes from './Dishes';

export default {
  name: 'home',
  components: {
    Slide,
    Deals,
    About,
    Dishes,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
