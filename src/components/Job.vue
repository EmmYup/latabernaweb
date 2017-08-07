<template>
<div id="job">
  <img src="../assets/champions.png" alt="champions la taberna" class="decoration champions">
  <div class="container">
    <div class="row">
      <div class="col-md-5 offset-md-1">
        <iframe src="https://snapwidget.com/embed/337792" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%;  height:462px;"></iframe>
        <div class="rate-social">
          <a :href="facebookUrl" target="_blank" class="facebook">
            <icon name="facebook" aria-hidden="true" class="social" scale="2"></icon>
            <span>4.3</span>
            <icon name="star" aria-hidden="true" class="star" scale=""></icon>
          </a>
          <a :href="tripadvisorUrl" target="_blank" class="tripadvisor">
            <icon name="tripadvisor" aria-hidden="true" class="social
            " scale="2"></icon>
            <span>4.0</span>
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="title-job text-center">
          ¡ven y trabaja entre <strong>amigos</strong>!
        </div>
        <div class="clear-20"></div>
        <div class="row">
          <div class="col-md-4" v-for="step in steps">
            <div class="step-job text-center">
              <img :src="getImgUrl(step.image)" :alt="getAlt(step.alt)">
            </div>
            <div class="clear-15"></div>
              <p class="text-center">{{ step.instruction }}</p>
          </div>
        </div>
        <div class="clear-20"></div>
        <a href="#" class="btn-job">¡TRABAJA CON NOSOTROS</a>
      </div>
    </div>
  </div>
  <div class="diagonal"></div>
</div>
</template>

<script src="https://snapwidget.com/js/snapwidget.js"></script>

<script>
  class Steps {
    constructor(image, alt, instruction) {
      this.image = image;
      this.alt = alt;
      this.instruction = instruction;
    }
  }

  export default {
    name: 'job',
    data() {
      return {
        facebookUrl: 'https://www.facebook.com/pg/latabernacancun/reviews/',
        tripadvisorUrl: 'https://www.tripadvisor.com.mx/UserReviewEdit-g150807-d3750726-ehttp:__2F____2F__www__2E__tripadvisor__2E__com__2E__mx__2F__Restaurant__5F__Review__2D__g150807__2D__d3750726__2D__Reviews__2D__La__5F__Taberna__5F__de__5F__Los__5F__Amigos__2D__Cancun__5F__Yucatan__5F__Peninsula__2E__html-La_Taberna_de_Los_Amigos-Cancun_Yucatan_Peninsula.html',
        steps: [
          new Steps('llena', 'Llena solicitud', '1.- llena nuestra solicitud.'),
          new Steps('espera', 'Espera llamada', '2.- espera nuestra llamada.'),
          new Steps('entrevista', 'Acude a la entrevista', '3.- asiste a tu entrevista.'),
        ],
      };
    },
    methods: {
      getImgUrl(img) {
        const images = require.context('../assets/', false, /\.png$/);
        return images(`./${img}.png`);
      },
      getAlt(alt) {
        return alt;
      },
    },
  };
</script>

<style scoped>
#job {
  padding: 30px 0;
  background-color: #fabc54;
  position: relative;
  min-height: 523px;
}

.decoration .champions {
  left: 0;
  top: 115px;
}

.rate-social a{
  color: #fff;
}

.rate-social a:hover {
  text-decoration: none;
}

.rate-social span {
  border-left: 1px solid #fff;
  padding-left: 10px;
}

.rate-social .facebook {
  display: inline-block;
  width: 180px;
  background-color: #688cff;
  padding: 12px 4px;
  font-size: 33px;
  font-weight: 700;
  border-radius: 10px;
  margin-right: 17px;
  margin-left: 7px;
}

.rate-social .facebook .social {
  font-size: 37px;
  font-weight: 400;
  margin-left: 30px;
}

.rate-social .tripadvisor {
  display: inline-block;
  width: 180px;
  background-color: #6c9345;
  padding: 12px 4px;
  font-size: 33px;
  font-weight: 700;
  border-radius: 10px;
}

.rate-social .tripadvisor  .social {
  font-size: 37px;
  font-weight: 400;
  margin-left: 30px;
}

.rate-social .star {
  font-size: 21px;
  margin-left: 5px;
}

.title-job {
  font-size: 60px;
  font-weight: 100;
  color: #155b73;
  text-transform: uppercase;
  line-height: 58px;
}

.step-job {
  width: 143px;
  height: 143px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}

.step-job:hover {
  background-color: #155b73;
  cursor: pointer;
}

.step-job:hover img {
  filter: grayscale(1) brightness(10);
}

.step-job img {
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(50%);
}

a.btn-job {
  display: block;
  margin: 0 auto;
  background-color: #155b73;
  color: #fff;
  padding: 20px 40px;
  font-size: 27px;
  line-height: 27px;
  width: 452px;
  border-radius: 10px;
  position: relative;
  z-index: 11;
}

a.btn-job:hover {
  text-decoration: none;
}

.diagonal {
  width: 100%;
  background-color: #fabc54;
  position: absolute;
  bottom: -16px;
  height: 40px;
  transform: rotate(-2deg) skewX(-2deg);
  z-index: 99;
}

@media only screen and (max-width: 768px) {
  .rate-social {
    margin: 10px 0;
  }
}

@media only screen and (max-width: 768px) {
  .rate-social .facebook {
    margin-right: 7px;
    margin-left: 3px;
  }
}
@media only screen and (max-width: 768px) {
  .title-job {
    font-size: 39px;
    text-align: center;
    line-height: 39px;
  }
}

@media only screen and (max-width: 768px) {
  a.btn-job {
    width: 100%;
    font-size: 22px;
  }
}
</style>
