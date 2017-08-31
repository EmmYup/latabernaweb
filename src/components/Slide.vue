<template>
<div id="slide">
  <slick :options="slickOptions">
    <div class="" v-for="slide in sliders">
      <img :src="getImgUrl(slide.image)" :alt="getAlt(slide.alt)">
    </div>
  </slick>
</div>
</template>

<script>
import Slick from 'vue-slick';

class Slider {
  constructor(image, alt) {
    this.image = image;
    this.alt = alt;
  }
}

export default {
  name: 'slide',
  components: {
    Slick,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      },
      sliders: [
        new Slider('2', 'Septiembre'),
        new Slider('1', 'Chicharito'),
      ],
    };
  },
  methods: {
    getImgUrl(img) {
      const images = require.context('../assets/sliders/', false, /\.png$/);
      return images(`./${img}.png`);
    },
    getAlt(alt) {
      return alt;
    },
  },
};
</script>

<style scoped>
.slick-slide img {
  width: 100%;
}
</style>
