<template>
<div class="home">
  <slide></slide>
  <deals></deals>
  <about></about>
  <!-- <dishes></dishes> -->
  <job></job>
</div>
</template>

<script>
import Slide from './Slide';
import Deals from './Deals';
import About from './About';
import Dishes from './Dishes';
import Job from './Job';

export default {
  name: 'home',
  components: {
    Slide,
    Deals,
    About,
    Dishes,
    Job,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
