<template>
<div id="slide">
    <b-carousel :controls="false" :indicators="false" :interval="4000" background="black">
      <b-carousel-slide>
        <img src="../assets/slider1.jpg" alt="">
      </b-carousel-slide>
      <b-carousel-slide>
        <img src="../assets/slider1.jpg" alt="">
      </b-carousel-slide>
      <b-carousel-slide>
        <img src="../assets/slider1.jpg" alt="">
      </b-carousel-slide>
    </b-carousel>
</div>
</template>

<script>
export default {
  name: 'slide',
};
</script>

<style scoped>
#slide b-carousel-slide {
  text-align: center;
}

#slide img {
  height: auto;
  width: auto;
  margin-left: 10px
}
</style>
