<template>
<div id="slide">
  <slick :options="slickOptions">
    <img src="../assets/slider1.jpg" alt="">
    <img src="../assets/slider1.jpg" alt="">
    <img src="../assets/slider1.jpg" alt="">
    <img src="../assets/slider1.jpg" alt="">
  </slick>
</div>
</template>

<script>
import Slick from 'vue-slick';

export default {
  name: 'slide',
  components: {
    Slick,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      this.$refs.slick.reSlick();
    },
  },
};
</script>

<style scoped>

</style>
