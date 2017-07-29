<template>
<div class="hello">

  <section v-scroll-reveal>
    <h1>Scroll down!</h1>
  </section>

  <section v-scroll-reveal>
    <h1>Tada!</h1>
  </section>
</div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section {
    height: 100vh;
  }
</style>
