<template>
<div id="deals">
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-5">
        <div class="deals-text">
          <span>{{ dealsTitle1 }}</span> <br>
          <span class="text1">{{ dealsTitle2 }}</span> <br>
          <span class="text2">{{ dealsTitle3 }}</span>
        </div>
      </div>
      <!-- TODO: arreglar arrow de slick -->
      <div class="col-md-7">
        <div class="deals-carousel">
          <slick :options="slickOptions">
            <div class="" v-for="deal in deals">
              <img :src="getImgUrl(deal.image)" :alt="getAlt(deal.alt)">
            </div>
          </slick>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Slick from 'vue-slick';

class Deal {
  constructor(image, alt) {
    this.image = image;
    this.alt = alt;
  }
}

export default {
  name: 'deals',
  components: {
    Slick,
  },
  data() {
    return {
      dealsTitle1: 'cada dia una',
      dealsTitle2: 'promocion',
      dealsTitle3: 'diferente',
      slickOptions: {
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
      deals: [
        new Deal('lunes', 'Promocion lunes'),
        new Deal('martes', 'Promocion martes'),
        new Deal('miercoles', 'Promocion miercoles'),
        new Deal('jueves', 'Promocion jueves'),
      ],
    };
  },
  methods: {
    getImgUrl(img) {
      const images = require.context('../assets/deals/', false, /\.png$/);
      return images(`./${img}.png`);
    },
    getAlt(alt) {
      return alt;
    },
  },
};
</script>

<style scoped>
#deals {
  background: url('../assets/promocion-fondo.png');
  padding: 40px 0;
}

.deals-text {
  text-transform: uppercase;
  color: #155B73;
  font-size: 50px;
  font-weight: 300;
  line-height: 40px;
}

.deals-text .text1 {
  font-weight: 700;
  font-size: 59px;
  line-height: 45px;
}

.deals-text .text2 {
  font-weight: 900;
  font-size: 65px;
  line-height: 55px;
}

@media only screen and (max-width: 768px) {
  .deals-text {
    font-size: 25px;
    text-align: center;
    line-height: 25px;
  }
}

@media only screen and (max-width: 768px) {
  .deals-text .text1 {
    font-size: 37px;
    line-height: 37px;
  }
}

@media only screen and (max-width: 768px) {
  .deals-text .text2 {
    font-size: 41px;
    line-height: 41px;
  }
}
</style>
