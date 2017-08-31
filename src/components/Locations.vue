<template>
  <div id="locations">
    <img src="../assets/placa.png" alt="" class="decoration placa">
    <div class="directions">
      <div class="clear-60"></div>
      <div class="subsidiaries">
        <div class="subsidiary color-blue" v-for="sub in subsidiary1">
          <span class="font-19">{{ sub.name }}</span>
          <span class="font-15">{{ sub.location }}</span>
          <span class="font-19">{{ sub.phone }}</span>
        </div>
        <div class="clear-30"></div>
        <div class="subsidiary color-blue" v-for="sub in subsidiary2">
          <span class="font-19">{{ sub.name }}</span>
          <span class="font-15">{{ sub.location }}</span>
          <span class="font-19">{{ sub.phone }}</span>
        </div>
      </div>
      <div class="clear-20"></div>
      <div class="social-subsidiary">
        <a href="#">
          <img src="../assets/tripadvisor-azul.png" alt="La taberna Trip Advisor">
        </a>
        <a href="#">
          <img src="../assets/facebook-azul.png" alt="@Lataberna Facebook">
        </a>
        <a href="#">
          <img src="../assets/twitter-azul.png" alt="@lataberna twitter">
        </a>
        <a href="#">
          <img src="../assets/instagram-azul.png" alt="@lataberna instagram">
        </a>
      </div>
      <div class="hashtag">
        {{ hashtag }}
      </div>
    </div>
    <googleMaps></googleMaps>
    <footerGeneral></footerGeneral>
  </div>
</template>

<script>
import footerGeneral from './global/FooterGeneral';
import googleMaps from './global/GoogleMaps';

export default {
  name: 'locations',
  components: {
    footerGeneral,
    googleMaps,
  },
  data() {
    return {
      subsidiary1: [
        { name: 'Sucursal Yaxchilán' },
        { location: 'Av. Yaxchilán #23 SM. 24 Col. Centro' },
        { phone: 'Tel: (998) 887-5433' },
      ],
      subsidiary2: [
        { name: 'Sucursal Sol' },
        { location: 'Av. del Sol Esq. Andres Q Roo SM. 44' },
        { phone: 'Tel: (998) 206-2006' },
      ],
      hashtag: '#VamosALaTaberna',
    };
  },
};
</script>

<style scoped>
#locations {
  position: relative;
}

.decoration.placa {
  right: 0;
  top: -40px;
}

.directions {
  height: 376px;
  width: 376px;
  background-color: #fabc54;
  position: absolute;
  z-index: 1000;
  border-radius: 50%;
  top: 60px;
  left: 115px;
}

.directions .subsidiaries .subsidiary {
  text-align: center;
}

.directions .social-subsidiary {
  text-align: center;
}

.directions .social-subsidiary a {
  margin-right: 5px;
}

.directions .social-subsidiary a img {
  width: 29px;
}

.color-blue {
  color: #155b73;
}

.directions .hashtag {
  font-size: 21px;
  font-weight: 300;
  color: #155b73;
  text-align: center;
  margin-top: 6px;
}

@media only screen and (max-width: 768px) {
  .directions {
    top: 0;
    left: 0;
    border-radius: 0;
    width: 100%;
    height: 268px;
    z-index: 99;
  }
}
@media only screen and (max-width: 768px) {
  .directions .clear-30 {
    height: 15px;
  }
}
@media only screen and (max-width: 768px) {
  .directions .clear-60 {
    display: none;
  }
}
</style>
